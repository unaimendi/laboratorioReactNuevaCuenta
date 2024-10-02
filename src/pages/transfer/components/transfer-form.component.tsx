import { FC, useEffect, useState } from "react";
import { AccountVm, createEmptyTransferError, createEmptyTransferVm, TransferError, TransferVm } from "../transfer.vm";
import { validateForm } from "../validations";
import classes from "./transfer-form.component.module.css";

interface Props {
	accountList: AccountVm[];
	onTransfer: (transferInfo: TransferVm) => void;
	defaultAccountId?: string;
}

export const TransferFormComponent: FC<Props> = (props: Props) => {
	const { accountList, onTransfer, defaultAccountId } = props;

	const [transfer, setTransfer] = useState<TransferVm>(createEmptyTransferVm());

	const [errors, setErrors] = useState<TransferError>(createEmptyTransferError());

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formValidationResult = validateForm(transfer);
		setErrors(formValidationResult.errors);
		if (formValidationResult.succeeded) {
			onTransfer(transfer);
		}
	};

	useEffect(() => {
		setTransfer({ ...transfer, accountId: defaultAccountId ?? "" });
	}, []);

	const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
		setTransfer({ ...transfer, [e.target.name]: e.target.value });
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className={classes.formContainer}>
					<div>
						<label>Seleccione cuenta origen</label>
						<select name="accountId" onChange={handleFieldChange} value={transfer.accountId} className={classes.large}>
							{accountList.map((account) => (
								<option key={account.id} value={account.id}>
									{account.alias}
								</option>
							))}
							<option value="">Selecciona una cuenta</option>
						</select>
						<p className={classes.error}>{errors.accountId}</p>
					</div>
					<div>
						<label>Ingrese el IBAN de destino:</label>
						<input type="text" name="iban" onChange={handleFieldChange} className={classes.large} />
						<p className={classes.error}>{errors.iban}</p>
					</div>
					<div>
						<label>Beneficiario:</label>
						<input name="name" onChange={handleFieldChange} className={classes.large} />
						<p className={classes.error}>{errors.name}</p>
					</div>
					<div>
						<label>
							Importe <span>(EUR)</span>:
						</label>
						<input name="amount" type="number" onChange={handleFieldChange} className={classes.small} />
						<p className={classes.error}>{errors.amount}</p>
					</div>
					<div>
						<label>Concepto:</label>
						<input name="concept" onChange={handleFieldChange} className={classes.large} />
						<p className={classes.error}>{errors.concept}</p>
					</div>
					<div>
						<label>Observaciones:</label>
						<input name="notes" onChange={handleFieldChange} className={classes.large} />
						<p className={classes.error}>{errors.notes}</p>
					</div>
				</div>
				<div className={classes.formContainer}>
					<p>Para que la transferencia se realice en otra fecha diferente a la de hoy, por favor, indíquenos la fecha de ejecución:</p>
					<div>
						<label>Fecha de ejecución:</label>
						<input name="realDateTransfer" type="date" onChange={handleFieldChange} />
						<p className={classes.error}>{errors.realDateTransfer}</p>
					</div>
				</div>
				<div className={classes.formContainer}>
					<p>Escriba una dirección de email para dar aviso al beneficiario:</p>
					<div>
						<label>Email del beneficiario:</label>
						<input name="email" onChange={handleFieldChange} className={classes.large} />
						<p className={classes.error}>{errors.email}</p>
					</div>
				</div>
				<button type="submit" className={classes.button}>
					REALIZAR LA TRANSFERENCIA
				</button>
			</form>
		</div>
	);
};
