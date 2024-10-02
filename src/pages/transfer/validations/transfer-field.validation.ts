import { isValidIban, isStringValueInformed, isPositiveNumber, isValueNotNullOrUndefined, isDateAfterToday, isEMailWellFormed, INVALID_IBAN_MESSAGE, INVALID_AMOUNT_MESSAGE, INVALID_REAL_DATE_TRANSFER_MESSAGE, INVALID_EMAIL_MESSAGE, FieldValidationResult, buildValidationFailedResult, buildValidationSucceededResult, buildRequiredFieldValidationFailedResponse } from "@/common/validations";

export const validateIBANField = (value: string): FieldValidationResult => {
	if (!isStringValueInformed(value)) {
		return buildRequiredFieldValidationFailedResponse();
	}

	if (!isValidIban(value)) {
		return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
	}

	return buildValidationSucceededResult();
};

export const validateAccountIdField = (value: string): FieldValidationResult => {
	if (!isStringValueInformed(value)) {
		return buildRequiredFieldValidationFailedResponse();
	}

	return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
	if (!isStringValueInformed(value)) {
		return buildRequiredFieldValidationFailedResponse();
	}

	return buildValidationSucceededResult();
};

export const validateAmountField = (value: number): FieldValidationResult => {
	if (!isPositiveNumber(value)) {
		return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE);
	}

	return buildValidationSucceededResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
	if (!isStringValueInformed(value)) {
		return buildRequiredFieldValidationFailedResponse();
	}

	return buildValidationSucceededResult();
};

export const validateNotesField = (_: string): FieldValidationResult => buildValidationSucceededResult();

export const validateRealDateTransferField = (value?: Date): FieldValidationResult => {
	if (!isValueNotNullOrUndefined(value)) {
		return buildValidationSucceededResult();
	}

	if (value && !isDateAfterToday(value)) {
		return buildValidationFailedResult(INVALID_REAL_DATE_TRANSFER_MESSAGE);
	}

	return buildValidationSucceededResult();
};

export const validateEmailField = (value: string): FieldValidationResult => {
	if (!isStringValueInformed(value)) {
		return buildValidationSucceededResult();
	}

	if (!isEMailWellFormed(value)) {
		return buildValidationFailedResult(INVALID_EMAIL_MESSAGE);
	}

	return buildValidationSucceededResult();
};
