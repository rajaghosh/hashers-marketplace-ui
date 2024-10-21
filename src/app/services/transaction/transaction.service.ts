// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TransactionService {

//   constructor() { }
// }



import { Injectable } from '@angular/core';

interface Transaction {
  item: string;
  buyer: string;
  seller: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }
}