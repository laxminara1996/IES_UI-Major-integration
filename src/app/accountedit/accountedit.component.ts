import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-accountedit',
  templateUrl: './accountedit.component.html',
  styleUrls: ['./accountedit.component.css']
})
export class AccounteditComponent implements OnInit {
id:number = 0;
msg:string = "";
account:Account = new Account();
ngOnInit(): void {
  this.getAccount();
}
  constructor(private accService:AccountService,private router:Router,private activeRoute: ActivatedRoute){}
getAccount(){
  this.id = this.activeRoute.snapshot.params['id'];
  this.accService.getAccountById(this.id).subscribe(data => {
    this.account = data;
  })

}
updateAccount(){
 this.accService.createAccount(this.account).subscribe(data => {
  this.msg = data.toString();
 }) 
}
}



