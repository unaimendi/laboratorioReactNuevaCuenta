import { ChangeEvent, FC, FormEvent, useState } from "react";
import { createEmptyCredentials, createEmptyCredentialsFormErrors, Credentials, CredentialsFormErrors } from "../login.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";

interface Props {
	onLogin: (credential: Credentials) => void;
}

export const LoginFormComponet: FC<Props> = (props: Props) => {
	const { onLogin } = props;

	const [credentials, setCredential] = useState<Credentials>(createEmptyCredentials());

	const [errors, setErrors] = useState<CredentialsFormErrors>(createEmptyCredentialsFormErrors());

	const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCredential({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const validationResult = validateForm(credentials);
		setErrors(validationResult.errors);
		if (validationResult.succeeded) {
			onLogin(credentials);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<div>
				<input type="text" id="username" name="user" onChange={handleFieldChange} placeholder="Usuario" className={errors.user && classes.inputError} />
				{errors.user && <p className={classes.error}>{errors.user}</p>}
			</div>
			<div>
				<input type="password" id="password" name="password" onChange={handleFieldChange} placeholder="Clave" className={errors.password && classes.inputError} />
				{errors.password && <p className={classes.error}>{errors.password}</p>}
			</div>
			<button type="submit" className={classes.btnEnviar}>
				Acceder
			</button>
		</form>
	);
};
