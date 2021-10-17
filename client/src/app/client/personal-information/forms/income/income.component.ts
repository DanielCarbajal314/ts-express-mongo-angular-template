import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractType, IndependantWorkRegime, WorkType } from '../../models/personal-information';

@Component({
  selector: 'income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {  
  workTypeOptions = [
    { type: WorkType.Dependant, name: 'Dependiente'},
    { type: WorkType.Independant, name: 'Independiente'}
  ]

  independantWorkRegimeOptions = [
    { type: IndependantWorkRegime.MYPE, name: 'MYPE'},
    { type: IndependantWorkRegime.RER, name: 'RER'},
    { type: IndependantWorkRegime.RUS, name: 'RUS'},
  ]

  contractTypeOptions = [
    { type: ContractType.FifthCategory, name: 'Quinta Categoria'},
    { type: ContractType.Invoice, name: 'Factura'},
    { type: ContractType.RHE, name: 'Recibos por Honorarios'},
  ]

  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) { 
    this.formGroup = formBuilder.group({
      workTime: ['', Validators.requiredTrue],
      paymentAmount: ['', Validators.requiredTrue],
      debtAmount: ['', Validators.requiredTrue],
      debtPaymentAmount: ['', Validators.requiredTrue],
      workType: [WorkType.Dependant],
      independantWorkRegime: [IndependantWorkRegime.RER],
      contractType: [ContractType.FifthCategory],
    }); 

  }

  ngOnInit(): void {
  }

  get isIndependant(){
    return this.formGroup.get('workType')?.value ==  WorkType.Independant;
  }

  getFormIncome(){
    console.log(this.formGroup.value);
    return this.formGroup.value;
  }
  
}
