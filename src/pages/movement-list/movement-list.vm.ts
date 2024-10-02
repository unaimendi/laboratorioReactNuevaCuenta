export interface MovementListVm {
	id: string;
	description: string;
	amount: number;
	balance: number;
	transaction: Date;
	realTransaction: Date;
	accountId: string;
}

export interface AccountVm {
	id: string;
	iban: string;
	name: string;
	balance: number;
}

export const createEmptyAccount = (): AccountVm => ({
	id: "",
	iban: "",
	name: "",
	balance: 0,
});
