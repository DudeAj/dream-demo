import { modalStateAtom } from "@/atoms";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

export const useGameCard = () => {
	const [isGameInfoModalOpen, setIsGameInfoModalOpen] =
		useState<boolean>(false);
	const setGlobalModalState = useSetRecoilState<boolean>(modalStateAtom);

	const toggleModalState =
		(
			modalStateSetter: React.Dispatch<React.SetStateAction<boolean>>,
			newState: boolean
		) =>
		() => {
			modalStateSetter(newState);
			setGlobalModalState(newState);
		};

	return {
		isGameInfoModalOpen,
		openGameInfoModal: toggleModalState(setIsGameInfoModalOpen, true),
		closeGameInfoModal: toggleModalState(setIsGameInfoModalOpen, false),
	};
};
