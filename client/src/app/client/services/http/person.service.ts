import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base-service';
import { CreatePerson } from './models/create-person.model';
import { IGetPersonFilesByType } from './models/get-person-file-by-type.model';
import { RegisteredPerson } from './models/registered-person.model';
import { IUploadPersonFile } from './models/upload-person-file';
import { IUploadPersonFileResponse } from './models/upload-person-file-response.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAllRegisteredPeople(): Observable<RegisteredPerson[]> {
    return this.get<RegisteredPerson[]>('person');
  }

  registerPerson(request:CreatePerson): Observable<RegisteredPerson> {
    return this.post<RegisteredPerson>('person', request);
  }

  getPersonFileByType(request: IGetPersonFilesByType): Observable<any> {
    return this.get<any>('person/files',request);
  }

  uploadPersonFile(request: IUploadPersonFile): Observable<IUploadPersonFileResponse> {
    const formData = new FormData()
    formData.append('file', request.file, request.fileName);
    formData.append('personId', request.personId);
    formData.append('fileType', request.fileType);
    return this.post<IUploadPersonFileResponse>('person/files', formData);
  } 

}
