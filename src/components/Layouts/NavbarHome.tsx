import NavButton from "../Elements/NavButton";
import { useState } from "react";
const NavHomePage = ({ status }: any) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="navbar w-full py-8 flex justify-center border-b border-b-slate-200 items-center md:py-5">
				<button className="block absolute right-4 md:hidden" type="button" onClick={() => setIsOpen(!isOpen)}>
					<span className={`block w-[30px] h-[2px] bg-red-700 my-2 transition-all duration-300 origin-top-left ${isOpen ? "rotate-45" : ""}`}></span>
					<span className={`block w-[30px] h-[2px] bg-red-700 my-2 transition-all duration-300 ${isOpen ? "scale-0" : ""}`}></span>
					<span className={`block w-[30px] h-[2px] bg-red-700 my-2 transition-all duration-300 origin-bottom-left ${isOpen ? "-rotate-45" : ""}`}></span>
				</button>
				<NavButton
					gapSize="gap-20"
					size="[35px]"
					hoverColor="text-orange-700"
					status={status}
					isOpen={isOpen}
				/>
			</div>
		</>
	);
};

export default NavHomePage;
