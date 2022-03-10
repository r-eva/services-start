import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.services";


//in order to add (Log) service to (this) a service we need to add a meta data to
// the service we want to inject. Just what we do on Component by add @Component or Directive by @Directive
// This is meta data for services

@Injectable()
// You dont add @Injectable to the service you want to Inject, but the service where you want to be injected
// so technicaly, you dont need to add @Injectable in all service,
// However, for new angular version it is advisable to add injectable to all service

export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    statusUpdated = new EventEmitter<string>()

    constructor(private loggingService: LoggingService) {

    }

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status)
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status)
    }
    
}