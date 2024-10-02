import { FC, ReactNode } from "react";
import { FooterComponent, HeaderComponent, NavbarComponent } from "./components";
import classes from "./app-layout.module.css";

interface Props {
	children: ReactNode;
}

export const AppLayout: FC<Props> = (props: Props) => {
	const { children } = props;

	return (
		<>
			<HeaderComponent />
			<NavbarComponent />
			<main className={classes.mainContent}>{children}</main>
			<FooterComponent />
		</>
	);
};
