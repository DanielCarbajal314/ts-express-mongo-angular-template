import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from 'src/app/shared/components/base-component';
import { ClientFilesFormComponent } from '../client-files-form/client-files-form.component';
import { RegisteredPerson } from '../services/http/models/registered-person.model';
import { PeopleViewmodelService } from '../services/view-models/people-viewmodel.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss']
})
export class ClientManagementComponent extends BaseComponent implements OnInit {
  people: RegisteredPerson[] = [];
  displayedColumns: string[] = ['dni', 'email', 'phone', 'propertyType'];

  constructor(private personViewModel: PeopleViewmodelService, public dialog: MatDialog) {
    super();
    
  }

  ngOnInit(): void {
    this.personViewModel.loadAllPeople();
    this.unsubscribeOnDestroy(this.personViewModel.people.subscribe(people=> this.people = people));
  }

  rowClicked(person: RegisteredPerson ){
    const dialogRef = this.dialog.open(ClientFilesFormComponent, {
      width: '50%',
      data: person
    });
  }

}
