import { REQUIRED_FIELD_MESSAGE } from "@/common/validations";
import { validateAccountTypeField, validateAliasField } from "./new-account-field.validation";

describe("new-account-field.validation specs", () => {
	describe("validateAccountTypeField", () => {
		it("should return false when concept is empty", () => {
			// Arrange
			const value = "";

			// Act
			const result = validateAccountTypeField(value);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
		});

		it("should return true when concept is informed", () => {
			// Arrange
			const value = "1";

			// Act
			const result = validateAccountTypeField(value);

			// Assert
			expect(result.succeeded).toBeTruthy();
		});
	});

	describe("validateAliasField", () => {
		it("should return false when Alias is empty", () => {
			// Arrange
			const value = "";

			// Act
			const result = validateAliasField(value);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
		});

		it("should return true when name is informed", () => {
			// Arrange
			const value = "Empresa";

			// Act
			const result = validateAliasField(value);

			// Assert
			expect(result.succeeded).toBeTruthy();
		});
	});
});
