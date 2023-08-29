import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
account:Account= new Account();
msg:string= "";
constructor(private accService:AccountService,private router:Router){}
onSubmit(){
  this.saveAccount();
}
saveAccount(){
  this.accService.createAccount(this.account).subscribe(data => {
    console.log(data);
  });
}
}
