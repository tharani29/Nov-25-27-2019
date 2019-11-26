class Transaction {
	constructor(amount, type) {
		this.amount = amount;
		this.type = type;
		this.date = new Date();
	}
}

class Account {
	
	constructor(balance) {
		if(balance < 10000) {
			throw new Error("Invalid balance");
		}
		this.balance = balance;
		this.withdrawCount = 0;
		this.transactions = [];
	}
	
	printStatement() {
		for(let i=0; i < this.transactions.length; i++) {
			let txn = this.transactions[i];
			console.log(txn.type, " ", txn.amount, " at ", txn.date.toTimeString());
		}
	}
	
	deposit(amount) {
		this.balance += amount;
		this.transactions.push(new Transaction(amount, "Deposit"));
	}
	
	withdraw(amount) {
		if(amount > this.balance) {
			throw new Error("Insufficient balance: " + this.balance);
		}
		this.withdrawCount += 1;
		this.balance -= amount;
		this.transactions.push(new Transaction(amount, "Withdraw"));
		if(this.withdrawCount > this.getMaxWithdrawCount()) {
			let fees = amount * 0.005;
			this.balance -= fees;
			this.transactions.push(new Transaction(fees, "Interest"));
		}
	}
	
	getMaxWithdrawCount() {
		return 3;
	}
	
}

class CurrentAccount extends Account {
	
	constructor(balance, name) {
		super(balance);
		this.name = name;
	}
	
	getMaxWithdrawCount() {
		return 10;
	}
	
}

let cacc = new CurrentAccount(200000);
try{
	cacc.deposit(1000);
	cacc.deposit(1000);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
	cacc.withdraw(100);
}
catch(er) {
	console.log("**** " + er.message);
}
cacc.printStatement();
console.log("Balance: " + cacc.balance);
console.log();

let acc = new Account(20000);
try{
	acc.deposit(1000);
	acc.deposit(1000);
	acc.withdraw(100);
	acc.withdraw(100);
	acc.withdraw(100);
	acc.withdraw(100);
	acc.withdraw(100000);	
}
catch(er) {
	console.log("**** " + er.message);
}
acc.printStatement();
console.log("Balance: " + acc.balance);