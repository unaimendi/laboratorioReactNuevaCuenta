import { AppLayout } from "@/layouts";
import { FC } from "react";
import classes from "./new-account.page.module.css";
import { NewAccountFormComponent } from "./components";
import { mapNewAccountFromVmToApi } from "./new-account.mapper";
import { saveNewAccount } from "./api";
import { NewAccountVm } from "./new-account.vm";

export const NewAccountPage: FC = () => {
	const handleNewAccount = (newAccountInfo: NewAccountVm) => {
		const newAccount = mapNewAccountFromVmToApi(newAccountInfo);
		saveNewAccount(newAccount).then((result) => {
			if (result) {
				alert("Nueva cuenta creada con éxito");
			} else {
				alert("Error al crear la nueva cuenta");
			}
		});
	};

	return (
		<AppLayout>
			<div className={classes.container}>
				<h1 className={classes.title}>Cuenta Bancaria</h1>
				<NewAccountFormComponent onSave={handleNewAccount} />
			</div>
		</AppLayout>
	);
};
