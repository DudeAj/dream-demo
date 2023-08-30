import { useState } from "react";

export const useNavbar = () => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

	const updateMobileNavState = (newState: boolean) => () => {
		setIsMobileNavOpen(newState);
	};

	return {
		isMobileNavOpen,
		openMobileNavbar: updateMobileNavState(true),
		closeMobileNavbar: updateMobileNavState(false),
	};
};
