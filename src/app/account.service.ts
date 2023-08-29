import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private ADMIN_API_URL="http://localhost:8091";

  constructor(private httpClient : HttpClient) { }

  createAccount(account:Account):Observable<Object>{
    return this.httpClient.post(`${this.ADMIN_API_URL}/account`,
                                  account,
                                  {responseType:"text"}
                              );
  }

  getAccounts():Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.ADMIN_API_URL}/accounts`);
  }

  getAccountById(id:number):Observable<Account>{
    return this.httpClient.get<Account>(`${this.ADMIN_API_URL}/account/${id}`);
  }

  updateAccountStatus(id:number, status:string):Observable<Object>{
    return this.httpClient.put(`${this.ADMIN_API_URL}/account/${id}/${status}`,
                              null, 
                              {responseType:"text"}
                            );
  }

}