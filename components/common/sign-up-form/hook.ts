import { useState } from "react";

export const useSignUpForm = () => {
	const [name, setName] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [currency, setCurrency] = useState<string>("");

	const [promoConsent, setPromoConsent] = useState<boolean>(false);
	const [termsConsent, setTermsConsent] = useState<boolean>(false);

	const handleTextChange =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setState(e.target.value);
		};

	const toggleCheckbox =
		(setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
			setState((prev) => !prev);
		};

	return {
		name,
		password,
		currency,
		promoConsent,
		termsConsent,
		onNameChange: handleTextChange(setName),
		onPasswordChange: handleTextChange(setPassword),
		onCurrencyChange: handleTextChange(setCurrency),
		onTogglePromoConsent: toggleCheckbox(setPromoConsent),
		onToggleTermsConsent: toggleCheckbox(setTermsConsent),
	};
};
