import { FormValidationResult } from "@/common/validations";

import { validateAccountTypeField, validateAliasField } from "./new-account-field.validation";
import { NewAccountError, NewAccountVm } from "../new-account.vm";

export const validateForm = (newAccount: NewAccountVm): FormValidationResult<NewAccountError> => {
	const fieldValidationResults = [validateAccountTypeField(newAccount.type), validateAliasField(newAccount.alias)];

	return {
		succeeded: fieldValidationResults.every((f) => f.succeeded),
		errors: {
			type: fieldValidationResults[0].errorMessage ?? "",
			alias: fieldValidationResults[1].errorMessage ?? "",
		},
	};
};
