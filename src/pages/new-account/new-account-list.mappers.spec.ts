import * as viewModel from "./new-account.vm";
import { mapNewAccountFromVmToApi } from "./new-account.mapper";

describe("pages/new-account/new-account.mapper specs", () => {
	describe("mapMovementListFromVmToApi", () => {
		it("should return empty object when it feeds empty object", () => {
			// Arrange
			const newAccount: viewModel.NewAccountVm = {
				type: "",
				alias: "",
			};

			// Act
			const result = mapNewAccountFromVmToApi(newAccount);

			// Assert
			expect(result).toEqual({
				type: "",
				name: "",
			});
		});
		it("should return the same object but using VM model structure", () => {
			// Arrange
			const newAccount: viewModel.NewAccountVm = {
				type: "1",
				alias: "Empresa",
			};
			// Act

			const result = mapNewAccountFromVmToApi(newAccount);

			// Assert
			expect(result).toEqual({
				type: "1",
				name: "Empresa",
			});
		});
	});
});
