import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'private-information',
  templateUrl: './private-information.component.html',
  styleUrls: ['./private-information.component.scss']
})
export class PrivateInformationComponent implements OnInit {
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) { 
    this.formGroup = formBuilder.group({
      married: false,
      dni: ['', Validators.requiredTrue],
      coupleDni: [''],
      email: [''],
      phone: [''],
    });

  }

  ngOnInit(): void {
  }

  get showCoupleDocumentInput(){
    return this.formGroup.get('married')?.value;
  }

  get marriedStatus(){
    return this.formGroup.get('married')?.value ? 'Casado' : 'Soltero';
  }

  getFormInformationPrivate(){
    return this.formGroup.value;
  }

  
}
