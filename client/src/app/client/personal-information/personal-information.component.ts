import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IncomeComponent } from './forms/income/income.component';
import { PropertyToBuyComponent } from './forms/property-to-buy/property-to-buy.component';
import { PrivateInformationComponent } from './forms/private-information/private-information.component';
import { PeopleViewmodelService } from '../services/view-models/people-viewmodel.service';
@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit, AfterViewInit  {
  constructor(private personViewModel: PeopleViewmodelService) { }
  @ViewChild(PropertyToBuyComponent) propertyForm!: PropertyToBuyComponent;
  @ViewChild(IncomeComponent) incomeForm!: IncomeComponent;
  @ViewChild(PrivateInformationComponent) privateInformationForm!: PrivateInformationComponent;

  property: any;
  income: any;
  prinvateInfo: any;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }  

  stepOne() {    
    this.property = this.propertyForm.getFormProperty();
    console.log(this.property);
  }

  stepTwo() {    
    this.income = this.incomeForm.getFormIncome();
    console.log(this.income);
  }

  submitForm() {
    this.prinvateInfo = this.prinvateInfo = this.privateInformationForm.getFormInformationPrivate();
    console.log(this.prinvateInfo);
    const person = {...this.property, ...this.income, ...this.prinvateInfo};
    console.log(person);
    this.personViewModel.registerPerson(person);

  }

}
