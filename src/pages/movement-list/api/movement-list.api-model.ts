export interface Account {
	id: string;
	iban: string;
	name: string;
	balance: number;
}

export interface MovementListVm {
	id: string;
	description: string;
	amount: number;
	balance: number;
	transaction: string;
	realTransaction: string;
	accountId: string;
}
