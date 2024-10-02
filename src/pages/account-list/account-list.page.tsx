import { AppLayout } from "@/layouts";
import { FC, useEffect, useState } from "react";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mappers";
import { Link } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountListPage: FC = () => {
	const [accountList, setAccountList] = useState<AccountVm[]>([]);

	useEffect(() => {
		getAccountList().then((result) => setAccountList(mapAccountListFromApiToVm(result)));
	}, []);

	return (
		<AppLayout>
			<div className={classes.root}>
				<div className={classes.headerContainer}>
					<h1>Mis cuentas</h1>

					<button>
						<Link to={appRoutes.newAccount}>AGREGAR NUEVA CUENTA</Link>
					</button>
				</div>
				<AccountListTableComponent accountList={accountList} />
			</div>
		</AppLayout>
	);
};
