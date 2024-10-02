import { FC } from "react";
import classes from "./movement-list-table.component.module.css";
import { MovementListVm } from "../movement-list.vm";
import { MovementListItemComponent } from "./movement-list-item.component";

interface Props {
	movementList: MovementListVm[];
}

export const MovementListTableComponent: FC<Props> = (props: Props) => {
	const { movementList } = props;

	return (
		<>
			<div className={classes.gridContainer}>
				<div className={classes.headerTable}>
					<span className={classes.headerCell}>FECHA</span>
					<span className={classes.headerCell}>FECHA VALOR</span>
					<span className={classes.headerCell}>DESCRIPCIÓN</span>
					<span className={classes.headerCell}>IMPORTE</span>
					<span className={classes.headerCell}>SALDO DISPONIBLE</span>
				</div>
				{movementList.map((movement) => (
					<MovementListItemComponent key={movement.id} movementItem={movement} />
				))}
			</div>
		</>
	);
};
