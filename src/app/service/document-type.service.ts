import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  url:string = `${environment.apiUrl}/api/v1/documentType`;


  constructor(
      public httpClient:HttpClient
  ) { }


  findAll():Observable<DocumentType[]>{
    return this.httpClient.get<DocumentType[]>(this.url);
  }

  findById(dotyId:number):Observable<DocumentType>{
    return this.httpClient.get<DocumentType>(`${this.url}/${dotyId}}`);
  }

  delete(dotyId:number):Observable<DocumentType>{
    return this.httpClient.delete<DocumentType>(`${this.url}/${dotyId}}`);
  }

  save(documentType:DocumentType):Observable<DocumentType>{
    return this.httpClient.post<DocumentType>(this.url,documentType);
  }


  update(documentType:DocumentType):Observable<DocumentType>{
    return this.httpClient.put<DocumentType>(this.url,documentType);
  }
}
