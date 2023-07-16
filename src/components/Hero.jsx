import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={`${styles.paddingX} absolute inset-0 top-[230px] max-w-7xl mx-auto flex flex-row items-start gap-5 max-h-[250px] z-10`}>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className="text-[#915eff]">Vazgen</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I'm a <span className="text-[#915eff]">Frontend Developer</span>
					</p>
				</div>
			</div>
			{/* <ComputersCanvas /> */}
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] border-4 rounded-3xl border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-4 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
