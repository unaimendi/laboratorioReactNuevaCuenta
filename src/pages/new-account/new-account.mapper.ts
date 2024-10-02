import * as apiModel from "./api";
import * as viewModel from "./new-account.vm";

export const mapNewAccountFromVmToApi = (newAccount: viewModel.NewAccountVm): apiModel.NewAccount => ({
	type: newAccount.type,
	name: newAccount.alias,
});
