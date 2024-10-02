import { validateForm } from "./new-account-form.validation";
import * as transferFieldValidation from "./new-account-field.validation";
import { vi } from "vitest";
import { NewAccountVm } from "../new-account.vm";
describe("new-account-form.validation specs", () => {
	describe("validateForm", () => {
		it("should return true when all fields are correct", () => {
			// Arrange
			const newAccount: NewAccountVm = {
				type: "1",
				alias: "Empresa",
			};

			vi.spyOn(transferFieldValidation, "validateAccountTypeField").mockReturnValue({
				succeeded: true,
			});

			vi.spyOn(transferFieldValidation, "validateAliasField").mockReturnValue({
				succeeded: true,
			});

			// Act
			const result = validateForm(newAccount);

			// Assert
			expect(result.succeeded).toBeTruthy();
			expect(result.errors).toEqual({
				type: "",
				alias: "",
			});
		});

		it("should return false when validateAccountTypeFieldAmount is incorrect", () => {
			// Arrange
			const newAccount: NewAccountVm = {
				type: "",
				alias: "Empresa",
			};

			vi.spyOn(transferFieldValidation, "validateAccountTypeField").mockReturnValue({
				succeeded: false,
				errorMessage: "Error",
			});

			vi.spyOn(transferFieldValidation, "validateAliasField").mockReturnValue({
				succeeded: true,
			});

			// Act
			const result = validateForm(newAccount);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errors).toEqual({
				type: "Error",
				alias: "",
			});
		});

		it("should return false when validateAliasFieldAmount is incorrect", () => {
			// Arrange
			const newAccount: NewAccountVm = {
				type: "1",
				alias: "",
			};

			vi.spyOn(transferFieldValidation, "validateAccountTypeField").mockReturnValue({
				succeeded: true,
			});

			vi.spyOn(transferFieldValidation, "validateAliasField").mockReturnValue({
				succeeded: false,
				errorMessage: "Error",
			});

			// Act
			const result = validateForm(newAccount);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errors).toEqual({
				type: "",
				alias: "Error",
			});
		});
	});
});
