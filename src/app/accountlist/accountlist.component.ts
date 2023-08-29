import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {
accounts:Account[] = [];

constructor(private accService:AccountService,private router:Router){}
  ngOnInit(): void {
    this.getAllAccounts();
  }
getAllAccounts(){
 this.accService.getAccounts().subscribe(data => {
  this.accounts = data;
 });
}
editAccount(id:number){
  this.router.navigate(['/edit',id]);
}
updateAccount(id:number,status:string){
  this.accService.updateAccountStatus(id,status).subscribe(data => {
  console.log(data);
  })

}

}
