"use client";

import { StaticImageData } from "next/image";
import Modal from "react-modal";
import Image from "next/image";

interface Props {
	isModalOpen: boolean;
	onRequestModalClose: () => void;
	gameName: string;
	gameImage: StaticImageData;
}

const GameInfoModal = (props: Props) => {
	const { isModalOpen, onRequestModalClose, gameImage, gameName } = props;

	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={onRequestModalClose}
			shouldCloseOnEsc={true}
			shouldCloseOnOverlayClick={true}
			className="w-full max-w-[600px] flex flex-col"
			style={{
				overlay: {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "rgba(0,0,0,.6)",
					paddingRight: 10,
					paddingLeft: 10,
				},
			}}
		>
			<div className="w-full px-4 py-6 flex flex-col items-center justify-center bg-white rounded-md">
				<h1 className="font-oxanium text-3xl text-center font-medium tracking-wider">
					{gameName}
				</h1>

				<Image
					src={gameImage.src}
					alt={gameName}
					height={gameImage.height}
					width={gameImage.width}
					className="md:w-60 sm:w-52 w-40 md:h-60 sm:h-52 h-40 object-contain rounded-3xl mt-3"
				/>

				<button
					className="text-primary-dark px-3 py-0.5 bg-gradient-to-r from-primary-yellow to-primary-golden hover:from-primary-golden hover:to-primary-yellow font-oxanium mt-4 rounded-md text-lg border border-primary-dark"
					onClick={onRequestModalClose}
				>
					OK
				</button>
			</div>
		</Modal>
	);
};

export default GameInfoModal;
