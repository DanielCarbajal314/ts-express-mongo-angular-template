import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonFileType } from '../services/http/models/get-person-file-by-type.model';
import { RegisteredPerson } from '../services/http/models/registered-person.model';
import { PeopleViewmodelService } from '../services/view-models/people-viewmodel.service';

@Component({
  selector: 'app-client-files-form',
  templateUrl: './client-files-form.component.html',
  styleUrls: ['./client-files-form.component.scss']
})
export class ClientFilesFormComponent implements OnInit {

  invoiceControl: FormControl = new FormControl();
  riskReportControl: FormControl = new FormControl();
  fileName: string = '';
  fileData: File | undefined;
  fileType: PersonFileType = PersonFileType.Invoice;

  constructor(public dialogRef: MatDialogRef<ClientFilesFormComponent>, @Inject(MAT_DIALOG_DATA) public data: RegisteredPerson, private personViewModel: PeopleViewmodelService) { }

  ngOnInit(): void {
    this.invoiceControl.disable();
    this.riskReportControl.disable();
    this.refreshFileNames();
  }

  refreshFileNames() {
    const invoiceFileName = this.data.files?.find(x => x.type === PersonFileType.Invoice)?.fileName??'';
    const riskReportFileName = this.data.files?.find(x => x.type === PersonFileType.RiskReport)?.fileName??'';
    this.invoiceControl.setValue(invoiceFileName);
    this.riskReportControl.setValue(riskReportFileName);
  }

  uploadInvoice() {
    this.fileType = PersonFileType.Invoice;
  }

  uploadRiskReport() {
    this.fileType = PersonFileType.RiskReport;
  }

  close(){
    this.dialogRef.close();
  }

  onFileSelected(event:any) {
      const file:File = event.target.files[0];
      if (file) {
          this.fileName = file.name;
          this.fileData = file;
          this.personViewModel.uploadFile({
            personId: this.data._id,
            fileType: this.fileType,
            file: this.fileData!,
            fileName: this.fileName
          })
      }
  }

}
