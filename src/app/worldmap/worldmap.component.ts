import { Component, OnInit, Inject, PLATFORM_ID, } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-worldmap',
  standalone: true,
  imports: [],
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  // Method to load country data from API for both countryCode (string) and SVGPathElement (click)
  loadCountryData(country: string | SVGPathElement): Observable<any> {
    let countryCode: string;
    
    if (typeof country === 'string') {
      countryCode = country;
    } else {
      countryCode = country.id; 
    }

    let api: string = `https://api.worldbank.org/V2/country/${countryCode}?format=json`;
    return this.http.get(api);
  }

  // Handle input of two-letter country code
  onCountryCodeInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const countryCode = inputElement.value.toUpperCase();
  
    if (countryCode.length === 2) {
      this.loadCountryData(countryCode).subscribe(data => {
        this.updateCountryDataDisplay(data);
      });
    } else {
      console.error('Invalid country code entered.');
    }
  }
  

  updateCountryDataDisplay(data: any): void {
    let dataPath: any = data[1];
    
    if (dataPath && dataPath.length > 0) {
      const nameElement = document.getElementById('name');
      if (nameElement) {
        nameElement.innerText = dataPath[0].name || 'N/A';
      }
  
      const capitalElement = document.getElementById('capital');
      if (capitalElement) {
        capitalElement.innerText = dataPath[0].capitalCity || 'N/A';
      }
  
      const regionElement = document.getElementById('region');
      if (regionElement) {
        regionElement.innerText = dataPath[0].region ? dataPath[0].region.value : 'N/A';
      }
  
      const incomeElement = document.getElementById('income');
      if (incomeElement) {
        incomeElement.innerText = dataPath[0].incomeLevel ? dataPath[0].incomeLevel.value : 'N/A';
      }
  
      const longitudeElement = document.getElementById('longitude');
      if (longitudeElement) {
        longitudeElement.innerText = dataPath[0].longitude || 'N/A';
      }
  
      const latitudeElement = document.getElementById('latitude');
      if (latitudeElement) {
        latitudeElement.innerText = dataPath[0].latitude || 'N/A';
      }
    } else {
      console.error('Data not available for the selected country.');
    }
  }

  // Initialize click events on the SVG paths
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      let svgCountryPaths = document.querySelectorAll<SVGPathElement>('path');

      Array.prototype.forEach.call(svgCountryPaths, (svgCountry: SVGPathElement) => {
        svgCountry.addEventListener('click', () => {
          this.loadCountryData(svgCountry).subscribe(data => {
            this.updateCountryDataDisplay(data);
          });
        });

        // Change color on hover
        svgCountry.addEventListener('mouseover', (event: MouseEvent) => {
          const path = event.target as SVGPathElement;
          path.style.fill = '#8B0000';
        });

        // Revert color
        svgCountry.addEventListener('mouseleave', (event: MouseEvent) => {
          const path = event.target as SVGPathElement;
          path.style.fill = '';
        });
      });
    }
  }
}