"use client"
import {
	AcademicCapIcon,
	ArrowTrendingUpIcon,
	ArrowsPointingOutIcon,
	BookOpenIcon,
	ClipboardDocumentIcon,
	CodeBracketIcon,
	FireIcon,
	HeartIcon,
	LightBulbIcon,
	MagnifyingGlassCircleIcon,
	MapIcon,
	PencilSquareIcon,
	PuzzlePieceIcon,
	UsersIcon,
	WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import Title from "./Elements/Title"

const WhyMe = ({ data }: any) => {
	return (
		<section id="hire" className="scroll-mt-[80px] px-5 py-20 lg:px-10 xl:px-20  text-slate-700">
			<Title>{data.title}</Title>
			<div>
				<p className="mt-10 mb-5 text-3xl font-semibold text-slate-700">For the Design Engineer position</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<CodeBracketIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I love to design — in code</h3>
							<p>
								I developed this portfolio without any mockup. Before Paris Airports and Anywhere, I rarely worked with mockup support, even though I&apos;m happy to have them now. However, I can manage without them and develop a
								decent graphic app.
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<MagnifyingGlassCircleIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I am fanatical about polish</h3>
							<p>
								Working for three years on <Link href="/projects/extime">Extime.com</Link> taught me to be pixel perfect. I also focused on refining component organization to avoid repetition by using semantic class names. When I use
								a comprehensive Tailwind UI component, I tend to customize it extensively to achieve a result very close to the new Catalyst UI kit.{" "}
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<BookOpenIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I deep dive</h3>
							<p>
								Even if 20% of knowledge is enough to do 80% of the job, I like to delve deeper into concepts that fascinate me in order to develop real expertise. This how I am feeling about React.js et Next.js, I want to be
								unbeatable if these topics were in the trivial pursuit.
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<WrenchScrewdriverIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I love to learn new tools</h3>
							<p>
								I enjoy trying out new tools as long as they are useful for the client. Using Tailwind UI is awesome, and I&apos;m eager to learn more about the Catalyst UI kit. I&apos;m also feeling pretty excited about becoming a
								better Rust developer. I&apos;m not closed off to reconsidering some of my works and decisions if there&apos;s something better than what I propose, so I&apos;m always open reconsider it.
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<ArrowsPointingOutIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I live on the bleeding edge</h3>
							<p>
								As I am the only remaining frontend developer on the Paris Airports Extime project, I am always looking for new features within our stack (Next.js, React.js, Tailwind, and Strapi) because it&apos;s my responsibility to
								leave a well-accomplished project when I eventually leave for your team. I like to watch the Next.js and React.js conference to take not and do a report to my team.
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<LightBulbIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I am a self-starter</h3>
							<p>I fill my backlog at Paris Airports myself when my sprint tasks are done, I am someone who takes initiative. When I have concept ideas or something to try, I had to pursue it before working on something else.</p>
						</div>
					</div>
					<div className="border-2 p-2 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<AcademicCapIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I am a great teacher</h3>
							<p>
								I am teaching web development on my{" "}
								<Link href="https://www.youtube.com/user/Dupzik" className="underline font-semibold" target="_blank">
									YouTube channel : FloDev
								</Link>
								. I also supported{" "}
								<Link href="https://olivia-garlantezec.fr/" className="underline font-semibold" target="_blank">
									my partner
								</Link>{" "}
								in her retraining as a UI UX Designer. I teached{" "}
								<Link href="https://www.max-webfolio.com/en" className="underline font-semibold" target="_blank">
									my little brother
								</Link>{" "}
								the minimum skills to pretend get a spot on the only Multimedia Engineer Degree program school (he succeeded).{" "}
							</p>
						</div>
					</div>
					<div className="border-2 p-2 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<ClipboardDocumentIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I am good at breaking down projects</h3>
							<p>
								I have a web agency with my partner called Anywwwhere where I am working and managing other freelances and developers on Saas projects built with Next.js and others Wordpress/Prestashop projects. Since it’s a young
								company, I am speaking to the custom and trying to identify the needs to defined how our skills can perfectly fit the customer project.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<p className="mt-10 mb-5 text-3xl font-semibold text-slate-700">For the Staff Software Engineer position</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<UsersIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I like to pair on problems.</h3>
							<p>
								Because I don&apos;t know everything, I am often by myself especially in my current position but I admitted that I never learn more than my 7 months in Canada at Absolunet, wokring inside a 10 developers team. It was
								amazing.
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<ArrowTrendingUpIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I hold people to a high standard, and inspire them to do their best work.</h3>
							<p>
								I like to give people a chance. I am more hostile towards those who think they know everything and make you feel inadequate. I prefer working with junior developers or people who are self-taught rather than attending
								five years study schools (like me haha) and who are eager to prove themselves.
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<MagnifyingGlassCircleIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I fanatical about polish </h3>
							<p>
								This is for what I am not a big fan of rushing project. I know for exemple I rushed the realization of this minisite, and when I will submit it, I won&apos;t be perfectly satisfied of this. I always tried to be the
								cleaner possible from the code to the pull request description
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<FireIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I miss when software used to be fast,</h3>
							<p>
								I am a fanatic of Next.js and their{" "}
								<Link href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating" className="underline" target="_blank">
									caching and revalidation system
								</Link>
								. Even when I have to jump on Wordpress project, I tried to use the fastest technologies available, less plugins. I discovered Oxygen Builder (a theme based on React) and I a loving using it for doing Wordpress Website
								because it&apos;s crazy fast and I can reach de 100 perf score on Google Ligthouse.
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<PuzzlePieceIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I am energized by unfamiliar territory.</h3>
							<p>
								I enjoy new things. I was really excited when I had to explore the{" "}
								<Link href="https://github.com/lautr/strapi-plugin-duplicate-button" className="underline" target="_blank">
									strapi-plugin-duplicate-button
								</Link>{" "}
								codebase to find a way to feat our needs at Paris Airports. At the same time, it dive me to contribute to improve the plugin because I identity it like a need that can serve the community. I was really happy when the
								plugin authors merged my{" "}
								<Link href="https://github.com/mattmilburn/strapi-plugin-preview-button/pull/62" target="_blank">
									strapi-plugin-preview-button
								</Link>{" "}
								and{" "}
								<Link href="https://github.com/lautr/strapi-plugin-duplicate-button/pull/4" target="_blank">
									strapi-plugin-duplicate-button
								</Link>{" "}
								pull requests.
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<PencilSquareIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I am great writer.</h3>
							<p>
								In French and English. Even if I am perfectible, I like to write my ideas and presents my concept with the most easy words to understand. I am someone who enjoys simplifying abstract concepts. I sometimes write somme
								article on{" "}
								<Link href="https://anywwwhere.com/blog" className="underline" target="_blank">
									Anywwwhere website.
								</Link>
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<MapIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I&apos;m good at breaking down projects. </h3>
							<p>
								When I&apos;m on a call with a client and they describe their ideal project with all the features they want because they believe they need them, I redefine the priorities to propose the best MVP (Minimum Viable
								Product) within a 2-3 month timeframe.
							</p>
						</div>
					</div>
					<div className="border-2 p-3 md:p-5 border-slate-200 rounded-lg flex gap-x-4">
						<HeartIcon className="text-slate-300 w-12 h-12 md:block hidden" />
						<div className="flex-1 space-y-1">
							<h3 className="text-xl font-semibold">I love great design.</h3>
							<p>
								Because my partner is a UI/UX designer (and I&apos;m proud to have supported her), and she would kill me if I didn&apos;t show at least some interest in design. I&apos;ve often had to complete full website projects by
								designing logos, mockups, and the site itself.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhyMe
