import { FC } from "react";
import classes from "./header.component.module.css";
import logoHeader from "/assets/logo_header_white.svg";
import { useProfileContext } from "@/core/profile";

export const HeaderComponent: FC = () => {
	const { userName } = useProfileContext();
	return (
		<header className={classes.header}>
			<div>
				<img src={logoHeader} className={classes.headerLogo} alt="logo" />
				<div className={classes.usuario}>
					<p>{userName}</p>
				</div>
			</div>
		</header>
	);
};
