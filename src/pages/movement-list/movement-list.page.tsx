import { AppLayout } from "@/layouts";
import { FC, useEffect, useState } from "react";
import { AccountVm, createEmptyAccount, MovementListVm } from "./movement-list.vm";
import { useParams } from "react-router-dom";
import { getAccount, getMovementList } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mappers";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";

export const MovementListPage: FC = () => {
	const { id } = useParams<{ id: string }>();

	const [account, setAccount] = useState<AccountVm>(createEmptyAccount());

	const [movementList, setMovementList] = useState<MovementListVm[]>([]);

	useEffect(() => {
		if (id) {
			getAccount(id).then(setAccount);
			getMovementList(id).then((result) => setMovementList(mapMovementListFromApiToVm(result)));
		}
	}, []);

	return (
		<AppLayout>
			<div className={classes.root}>
				<div className={classes.headerContainer}>
					<h1>Saldos y Últimos movimientos</h1>
					<div className={classes.saldoContainer}>
						<p>SALDO DISPONIBLE</p>
						<div className={classes.saldo}>${account.balance} €</div>
					</div>
				</div>
				<div className={classes.accountInfoContainer}>
					<p className={classes.accountName}>Alias: {account.name}</p>
					<p className={classes.accountIban}>{account.iban}</p>
				</div>
				<MovementListTableComponent movementList={movementList} />
			</div>
		</AppLayout>
	);
};
