import { AppLayout } from "@/layouts";
import { FC, useEffect, useState } from "react";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import classes from "./transfer.page.module.css";
import { getAccountList, saveTransfer } from "./api";
import { mapAccountFromApiToVm, mapTransferFromVmToApi } from "./transfer.mapper";
import { useParams } from "react-router-dom";

export const TransferPage: FC = () => {
	const [accountList, setAccountList] = useState<AccountVm[]>([]);

	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		getAccountList().then((accountListApi) => {
			const accountListVm = accountListApi.map(mapAccountFromApiToVm);
			setAccountList(accountListVm);
		});
	}, []);

	const handleTransfer = (transferInfo: TransferVm) => {
		const transfer = mapTransferFromVmToApi(transferInfo);
		saveTransfer(transfer).then((result) => {
			if (result) {
				alert("Transferencia realizada con éxito");
			} else {
				alert("Error al realizar la transferencia");
			}
		});
	};
	return (
		<AppLayout>
			<div className={classes.container}>
				<h1 className={classes.title}>Transferencias Nacionales</h1>
				<TransferFormComponent accountList={accountList} onTransfer={handleTransfer} defaultAccountId={id} />
			</div>
		</AppLayout>
	);
};
