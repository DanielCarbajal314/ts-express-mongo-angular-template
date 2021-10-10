import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class BaseService {
    private apiRoot = environment.apiRoot;

    constructor(protected http: HttpClient) { }
  
    get<T>(url:string, params:any = null):Observable<T>{
        if (params) {
            const httpParams = new HttpParams({ fromObject: params});
            return this.http.get<T>(url, { params: httpParams });
        }
        return this.http.get<T>(this.apiRoot+url);
    }

    post<T>(url:string, body:any):Observable<T>{
        return this.http.post<T>(this.apiRoot+url, body);
    }
  
}
  