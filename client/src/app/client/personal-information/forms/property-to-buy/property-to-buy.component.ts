import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyType } from '../../models/personal-information';

@Component({
  selector: 'property-to-buy',
  templateUrl: './property-to-buy.component.html',
  styleUrls: ['./property-to-buy.component.scss']
})
export class PropertyToBuyComponent implements OnInit {
  propertyOptions = [
    { type: PropertyType.DeparmentBuilt, name: 'Departamento Construido'},
    { type: PropertyType.DeparmentProject, name: 'Departamento en Proyecto'},
    { type: PropertyType.House, name: 'Casa'},
    { type: PropertyType.Terrain, name: 'Terreno'},
  ]

  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) { 
    this.formGroup = formBuilder.group({
      isFirstProperty: true,
      propertyPrice: ['', Validators.requiredTrue],
      initialAmount: ['', Validators.requiredTrue],
      yearsToPay: ['', Validators.requiredTrue],
      timeToBuyWait: ['', Validators.requiredTrue],
      propertyType: [PropertyType.DeparmentBuilt]
    }); 

  }

  ngOnInit(): void {
  }

  get propertyNewLabel(){
    return this.formGroup.get('isFirstProperty')?.value ? 'Es Primera propiedad que va adquirir' : 'No es la primera propiedad';
  }

}
