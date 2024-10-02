import { REQUIRED_FIELD_MESSAGE } from "@/common/validations";
import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe("pages/lagin/login.validation.spec.ts", () => {
	it("Should return validation succeeded when both field are informed", () => {
		// Arrange
		const credentials: Credentials = {
			user: "myuser",
			password: "mypassword",
		};

		// Act
		const result = validateForm(credentials);

		// Assert
		expect(result.succeeded).toBeTruthy();
		expect(result.errors.user).toEqual("");
		expect(result.errors.password).toEqual("");
	});

	it("Should return validation failed when user is empty", () => {
		// Arrange
		const credentials: Credentials = {
			user: "",
			password: "mypassword",
		};

		// Act
		const result = validateForm(credentials);

		// Assert
		expect(result.succeeded).toBeFalsy();
		expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
		expect(result.errors.password).toEqual("");
	});

	it("Should return validation failed when password is empty", () => {
		// Arrange
		const credentials: Credentials = {
			user: "myuser",
			password: "",
		};

		// Act
		const result = validateForm(credentials);

		// Assert
		expect(result.succeeded).toBeFalsy();
		expect(result.errors.user).toEqual("");
		expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
	});

	it("Should return validation failed when both field are empty", () => {
		// Arrange
		const credentials: Credentials = {
			user: "",
			password: "",
		};

		// Act
		const result = validateForm(credentials);

		// Assert
		expect(result.succeeded).toBeFalsy();
		expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
		expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
	});
});
