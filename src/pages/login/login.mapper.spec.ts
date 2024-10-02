import * as apiModel from "./api/login.api-model";
import * as viewModel from "./login.vm";
import { mapCredentialsFromVmToApi } from "./login.mapper";

describe("login.mapper specs", () => {
	it("should return a credential with same preperties", () => {
		// Arrange
		const vmCredentials: viewModel.Credentials = {
			user: "myuser",
			password: "mypassword",
		};

		const expectedApiCredentials: apiModel.Credentials = {
			user: "myuser",
			password: "mypassword",
		};

		// Act
		const result: apiModel.Credentials = mapCredentialsFromVmToApi(vmCredentials);

		// Assert
		expect(result).toEqual(expectedApiCredentials);
	});
});
