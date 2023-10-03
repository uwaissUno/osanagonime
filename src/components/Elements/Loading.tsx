import Image from "next/image";
const Loading = () => {
	return (
		<>
			<Image
				src={"/loading.svg"}
				width={300}
				height={300}
				alt="loading"
			/>
		</>
	);
};

export default Loading;
