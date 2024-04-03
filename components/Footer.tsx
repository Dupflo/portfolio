import Github from "../assets/svg/github-icon.svg"
import Instagram from "../assets/svg/instagram-icon.svg"
import Linkedin from "../assets/svg/linkedin-icon.svg"
import Malt from "../assets/svg/malt-icon.svg"
import Twitter from "../assets/svg/twitter.svg"
import Youtube from "../assets/svg/youtube-icon.svg"

const Footer = () => {
	return (
		<footer className="bg-white sticky top-0 z-10 lg:px-10 xl:px-20">
			<div className="container p-5 z-10  mx-auto lg:flex space-y-5 lg:space-y-0 items-baseline justify-center">
				<ul className="flex flex-wrap justify-between tracking-wider font-medium ">
					<li className="px-2 ">
						<a href="https://github.com/Dupflo" rel="noreferrer" target="_blank">
							<Github className="w-4 h-4 sm:w-7 sm:h-7 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
						</a>
					</li>
					<li className="px-2 ">
						<a href="https://www.linkedin.com/in/florian-dupuis-701310b1/" rel="noreferrer" target="_blank">
							<Linkedin className="w-4 h-4 sm:w-7 sm:h-7 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
						</a>
					</li>
					<li className="px-2 ">
						<a href="https://www.youtube.com/user/Dupzik?app=desktop" rel="noreferrer" target="_blank">
							<Youtube className="w-4 h-4 sm:w-7 sm:h-7 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
						</a>
					</li>
					<li className="px-2 ">
						<a href="https://twitter.com/Dupuis_Florian" rel="noreferrer" target="_blank">
							<Twitter className="w-4 h-4 sm:w-7 sm:h-7 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
						</a>
					</li>
					<li className="px-2 ">
						<a href="https://www.instagram.com/dupflo/" rel="noreferrer" target="_blank">
							<Instagram className="w-4 h-4 sm:w-7 sm:h-7 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
						</a>
					</li>
					<li className="px-2 ">
						<a href="https://www.malt.fr/profile/dupuisflorian" rel="noreferrer" target="_blank">
							<Malt className="w-12 sm:w-20 transition ease-in-out fill-slate-300 hover:fill-slate-700" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
