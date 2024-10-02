import { FC } from "react";
import classes from "./footer.component.module.css";
import logoFooter from "/assets/logo_footer.svg";

export const FooterComponent: FC = () => {
	return (
		<div className={classes.footer}>
			<img src={logoFooter} className={classes.footerLogo} alt="logo" />
		</div>
	);
};
