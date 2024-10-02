export interface NewAccountVm {
	alias: string;
	type: string;
}

export const createEmptyNewAccount = (): NewAccountVm => ({
	type: "",
	alias: "",
});

export interface NewAccountError {
	type: string;
	alias: string;
}

export const createEmptyNewAccountError = (): NewAccountError => ({
	type: "",
	alias: "",
});
