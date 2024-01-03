import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

type NavButtonProps = {
	size: string;
	hoverColor: string;
	gapSize: string;
	status: any;
	isOpen: boolean;
};

const Button = ({ size, hoverColor, gapSize, status, isOpen }: NavButtonProps) => {
	return (
		<div className={`button md:flex items-center text-white ${isOpen ? "flex" : "hidden"}  absolute flex-col bg-white bg-opacity-25 backdrop-blur-sm top-20 w-[250px] right-2 gap-4  p-4 rounded-lg border border-slate-200 md:flex-row md:static md:w-full md:${gapSize} md:justify-center md:bg-transparent md:border-none md:p-0 `}>
			<Link
				className={`hover:${hoverColor} transition-all duration-200 text-${size}`}
				href={"/"}
			>
				Home
			</Link>
			<Link
				className={`hover:${hoverColor} transition-all duration-200 text-${size}`}
				href={"/popular"}
			>
				Popular Anime
			</Link>
			<Link
				className={`hover:${hoverColor} transition-all duration-200 text-${size}`}
				href={"/anime"}
			>
				All Anime
			</Link>
			{status === "authenticated" ? (
				<button onClick={() => signOut()}>Log Out</button>
			) : (
				<button onClick={() => signIn()}>Log In</button>
			)}
		</div>
	);
};

export default Button;
