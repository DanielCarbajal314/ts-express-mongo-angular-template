import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { CreatePerson } from '../http/models/create-person.model';
import { RegisteredPerson } from '../http/models/registered-person.model';
import { IUploadPersonFile } from '../http/models/upload-person-file';
import { PersonService } from '../http/person.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleViewmodelService {
  people: Subject<RegisteredPerson[]> = new ReplaySubject(1); 
  loadingPeopleFromServer: Subject<boolean> = new ReplaySubject(1); 
  loadingRegisterPerson: Subject<boolean> = new ReplaySubject(1); 
  fileUploadEnded: Subject<void> = new Subject(); 
  private lastPeopleLoaded: RegisteredPerson[] = [];

  constructor(private personService: PersonService) { }

  loadAllPeople(){
    this.loadingPeopleFromServer.next(true);
    this.personService.getAllRegisteredPeople().subscribe({
      next: people=> {
        this.people.next(people);
        this.loadingPeopleFromServer.next(false);
        this.lastPeopleLoaded = people;
      },
      error: () => this.loadingPeopleFromServer.next(false)
    })
  }

  registerPerson(newPerson: CreatePerson){
    this.loadingRegisterPerson.next(true);
    this.personService.registerPerson(newPerson).subscribe({
      next: person=>{
        this.people.next([ person, ...this.lastPeopleLoaded ]);
        this.loadingRegisterPerson.next(false);
      },
      error: () => this.loadingRegisterPerson.next(false)
    });
  }

  uploadFile(request: IUploadPersonFile) {
    this.personService.uploadPersonFile(request).subscribe(file=>{
      const person = <RegisteredPerson>this.lastPeopleLoaded.find(x => x._id === request.personId);
      const personFilesNotReplaced = (person?.files??[]).filter(x => x.type !== request.fileType);
      person.files = [...personFilesNotReplaced, file];
      this.fileUploadEnded.next();
    })
  }

}
