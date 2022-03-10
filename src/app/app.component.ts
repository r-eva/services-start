import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = []    // An array of account, each account in the form of object, and the initial value of account is []

  constructor (private accountService: AccountsService) {

  }
  ngOnInit(): void {
      this.accounts = this.accountService.accounts
  }
}
