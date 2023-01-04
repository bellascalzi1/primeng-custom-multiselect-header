import { Component, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { CountryService } from './countryservice';
import { MultiSelect } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CountryService],
})
export class AppComponent {
  selectedCities: string[] = [];

  selectedCountries1: string[] = [];

  selectedCountries2: string[] = [];

  items: SelectItem[];

  item: string;

  cities: any[];

  countries: any[];
  value = false;

  @ViewChild('hello') selectElement!: MultiSelect;

  constructor(
    private countryService: CountryService,
    private primengConfig: PrimeNGConfig
  ) {
    this.items = [];

    this.countryService.getCountries().then((countries) => {
      this.items = countries;
    });

    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  myFunction(event: any): void {
    // This sets all the checkboxes to checked but it does not actually update the checkbox values.
    // We need to use toggleAll instead.
    // event.currentTarget.checked
    //   ? this.selectElement.checkAll()
    //   : this.selectElement.uncheckAll();
    // console.log(this.value);
    this.selectElement.toggleAll(event);
  }
}
