"use client";

import { useSignUpForm } from "./hook";

const SignUpForm = () => {
	const {
		name,
		password,
		currency,
		promoConsent,
		termsConsent,
		onNameChange,
		onPasswordChange,
		onCurrencyChange,
		onTogglePromoConsent,
		onToggleTermsConsent,
	} = useSignUpForm();

	return (
		<div className="w-full md:max-w-[550px] md:min-h-[544px] bg-primary-gray p-4 rounded-2xl flex flex-col justify-around">
			<h1 className="lg:text-3xl text-[20px] font-poppins font-bold text-center">
				Join DreamGameZ
			</h1>

			<input
				className="w-full mt-3 p-2.5 font-poppins rounded-lg bg-primary-gray border border-primary-dark/60 focus:outline-none placeholder:text-primary-dark/60 text-primary-dark"
				placeholder="Enter your name"
				value={name}
				onChange={onNameChange}
			/>

<input
				className="w-full mt-3 p-2.5 font-poppins rounded-lg bg-primary-gray border border-primary-dark/60 focus:outline-none placeholder:text-primary-dark/60 text-primary-dark"
				placeholder="Enter your email"
				value={currency}
				onChange={onCurrencyChange}
			/>

			<input
				className="w-full mt-3 p-2.5 font-poppins rounded-lg bg-primary-gray border border-primary-dark/60 focus:outline-none placeholder:text-primary-dark/60 text-primary-dark"
				placeholder="Enter your password"
				value={password}
				onChange={onPasswordChange}
			/>

			

			<div className="w-full flex items-center mt-6">
				<input
					type="checkbox"
					className="w-4 h-4 bg-primary-gray rounded-md"
					checked={promoConsent}
					onChange={onTogglePromoConsent}
				/>
				<p className="ml-1 text-sm text-primary-dark font-poppins">
					I do not want to receive promos.
				</p>
			</div>

			<div className="w-full flex items-start mt-2">
				<input
					type="checkbox"
					className="w-4 h-4 bg-primary-gray rounded-md"
					checked={termsConsent}
					onChange={onToggleTermsConsent}
				/>
				<p className="flex-1 ml-1 text-sm text-primary-dark font-poppins break-words">
					I am 18 years old and I accept Privacy Policy and Terms and
					Conditions.
				</p>
			</div>

			<button className="w-full flex items-center justify-center py-1 px-3 bg-primary-dark text-primary-gray text-center mt-3 rounded-md font-poppins tracking-wider font-semibold text-lg">
				Register Now
			</button>
		</div>
	);
};

export default SignUpForm;
