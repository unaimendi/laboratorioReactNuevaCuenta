import { createContext, FC, ReactNode, useContext, useState } from "react";

interface Context {
	userName: string;
	setUserProfile: (userName: string) => void;
}

const noUserLogin = "no user login";

export const ProfileContext = createContext<Context>({
	userName: noUserLogin,
	setUserProfile: () => {},
});

interface Props {
	children: ReactNode;
}

export const ProfileProvider: FC<Props> = (props: Props) => {
	const { children } = props;
	const [userProfile, setUserProfile] = useState<string>(noUserLogin);

	return <ProfileContext.Provider value={{ userName: userProfile, setUserProfile }}>{children}</ProfileContext.Provider>;
};

export const useProfileContext = () => useContext(ProfileContext);
