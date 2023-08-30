import { atom } from "recoil";

export const modalStateAtom = atom<boolean>({
	key: "modalStateAtom",
	default: false,
});
