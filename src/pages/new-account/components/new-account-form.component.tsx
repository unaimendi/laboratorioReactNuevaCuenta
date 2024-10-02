import { FC, useState } from "react";
import classes from "./new-account-form.component.module.css";
import { createEmptyNewAccountError, NewAccountError, NewAccountVm } from "../new-account.vm";
import { validateForm } from "../validations";

interface Props {
	onSave: (newAccountInfo: NewAccountVm) => void;
}

export const NewAccountFormComponent: FC<Props> = (props: Props) => {
	const { onSave } = props;
	const [newAccount, setNewAccount] = useState<NewAccountVm>(createEmptyNewAccountError());

	const [errors, setErrors] = useState<NewAccountError>(createEmptyNewAccountError());

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formValidationResult = validateForm(newAccount);
		setErrors(formValidationResult.errors);
		if (formValidationResult.succeeded) {
			onSave(newAccount);
		}
	};

	const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
		setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={classes.formContainer}>
				<div>
					<label>Tipo de cuenta:</label>
					<select name="type" onChange={handleFieldChange} value="" className={classes.large}>
						<option value="">Selecciona una cuenta</option>
						<option value="1">Cuenta Corriente</option>
						<option value="2">Cuenta de Ahorro</option>
						<option value="3">Cuenta de Nómina</option>
					</select>
					<p className={classes.error}>{errors.type}</p>
				</div>
				<div>
					<label>Alias:</label>
					<input name="alias" onChange={handleFieldChange} className={classes.large} />
					<p className={classes.error}>{errors.alias}</p>
				</div>
			</div>
			<button type="submit" className={classes.button}>
				GUARDAR
			</button>
		</form>
	);
};
