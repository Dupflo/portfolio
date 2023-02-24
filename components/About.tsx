import Image from "next/image"
import Github from "../assets/svg/github-icon.svg"
import Instagram from "../assets/svg/instagram-icon.svg"
import Linkedin from "../assets/svg/linkedin-icon.svg"
import Malt from "../assets/svg/malt-icon.svg"
import Twitter from "../assets/svg/twitter.svg"
import Youtube from "../assets/svg/youtube-icon.svg"

const About = ({ name, nickname, data }: any) => {
	return (
		<section id="about" className="scroll-mt-[80px] lg:px-10 xl:px-24 lg:py-28 py-10 bg-slate-100 flex flex-col-reverse lg:flex-row">
			<div className="mx-auto bg-white shadow-lg lg:rounded-l-lg px-5 pt-5 pb-10 text-gray-800 w-full lg:w-8/12">
				<div className="w-full pt-1 pb-5">
					<div className="overflow-hidden relative z-10 rounded-full w-40 h-40 -mt-16 mx-auto shadow-lg">
						<Image src="/img/profil.jpeg" alt="Florian Dupuis" fill objectFit="cover" />
					</div>
				</div>
				<div className="w-full mb-10">
					<div className="text-3xl text-grey-600 text-left leading-tight h-3">“</div>
					<p className="text-gray-600 text-justify px-5 mb-2 whitespace-pre-line">{data.description}</p>
					<div className="text-3xl text-grey-600 text-right leading-tight h-3 -mt-3">”</div>
				</div>
				<div className="w-full">
					<p className="text-md text-grey-600 font-bold text-center">{name}</p>
					<p className="text-xs text-gray-500 text-center">{nickname}</p>
				</div>
				<div className="container p-5 z-10  mx-auto lg:flex space-y-5 lg:space-y-0 items-baseline justify-center">
					<ul className="flex justify-between tracking-wider font-medium ">
						<li className="px-2 ">
							<a href="https://github.com/Dupflo" rel="noreferrer" target="_blank">
								<Github className="w-5 h-5 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
							</a>
						</li>
						<li className="px-2">
							<a href="https://www.linkedin.com/in/florian-dupuis-701310b1/" rel="noreferrer" target="_blank">
								<Linkedin className="w-5 h-5 transition ease-in-out fill-slate-300 hover:fill-slate-700 " />
							</a>
						</li>
						<li className="px-2">
							<a href="https://www.malt.fr/profile/dupuisflorian" rel="noreferrer" target="_blank">
								<Malt className="w-14 h-5 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
							</a>
						</li>
						<li className="px-2">
							<a href="https://www.youtube.com/user/Dupzik?app=desktop" rel="noreferrer" target="_blank">
								<Youtube className="w-5 h-5 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
							</a>
						</li>
						<li className="px-2">
							<a href="https://twitter.com/Dupuis_Florian" rel="noreferrer" target="_blank">
								<Twitter className="w-5 h-5 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
							</a>
						</li>
						<li className="px-2">
							<a href="https://www.instagram.com/dupflo/" rel="noreferrer" target="_blank">
								<Instagram className="w-5 h-5 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
							</a>
						</li>
					</ul>
				</div>
				<div className="mx-auto text-center my-2">
					<a href="/Florian_Dupuis_Resume.pdf" target="_blank" className="mt-2 p-3 rounded-md bg-slate-800  py-2 text-slate-100 hover:bg-slate-500 hover:shadow-md duration-75">
						{data.cta.title}
					</a>
				</div>
			</div>
			<div className="relative w-full h-44 lg:h-auto lg:w-5/12 lg:shadow-lg lg:rounded-r-lg overflow-hidden">
				<Image src="/img/background.jpeg" fill objectFit="cover" alt="computer" />
			</div>
		</section>
	)
}

export default About
