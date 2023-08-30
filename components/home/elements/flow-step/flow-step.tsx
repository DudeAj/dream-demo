interface Props {
    text: string;
}

const FlowStep = (props: Props) => {
    const { text } = props;

    return (
        <p className="lg:text-lg md:text-base text-sm text-white font-quicksand font-medium">
            {text}
        </p>
    );
};

export default FlowStep;
