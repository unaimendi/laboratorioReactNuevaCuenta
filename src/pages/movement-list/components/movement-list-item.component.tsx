import { FC } from "react";
import classes from "./movement-list-item.component.module.css";
import { MovementListVm } from "../movement-list.vm";

interface Props {
	movementItem: MovementListVm;
}

export const MovementListItemComponent: FC<Props> = (props: Props) => {
	const { movementItem } = props;

	return (
		<div className={classes.row}>
			<span className={classes.dataCell}>{movementItem.transaction.toLocaleDateString()}</span>
			<span className={classes.dataCell}>{movementItem.realTransaction.toLocaleDateString()}</span>
			<span className={classes.dataCell}>{movementItem.description}</span>
			<span className={`${classes.dataCell} ${classes.alignRight} ${movementItem.amount < 0 ? classes.colorRed : ""}`}>{movementItem.amount} €</span>
			<span className={`${classes.dataCell} ${classes.alignRight}`}>{movementItem.balance} €</span>
		</div>
	);
};
