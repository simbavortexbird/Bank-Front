import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../domain/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string = `${environment.apiUrl}/api/v1/customer`;


  constructor(
      public httpClient:HttpClient
  ) { }


  findAll():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.url);
  }

  findById(idcust:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.url}/${idcust}}`);
  }

  delete(idcust:number):Observable<Customer>{
    return this.httpClient.delete<Customer>(`${this.url}/${idcust}}`);
  }

  save(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.url,customer);
  }


  update(customer:Customer):Observable<Customer>{
    return this.httpClient.put<Customer>(this.url,customer);
  }

}
