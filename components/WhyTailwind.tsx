import Link from "next/link"
import Title from "./Elements/Title"

export default function WhyTailwind() {
	return (
		<section id="why">
			<div className="space-y-5 scroll-mt-[80px] px-5 py-20 lg:px-10 xl:px-20 bg-slate-100 text-slate-700">
				<Title>{`<span class="underblack">Why</span> Tailwind Labs ?`}</Title>
				<p>
					Because to me, you are the <b>final boss</b>. I am always striving to push myself to a deeper level, looking for how I can improve a project and how I can become a better developer. I&apos;ve thoroughly enjoyed the last three
					years of experience at Paris Airports, which I consider the best professional experience I&apos;ve had in my career so far. While working there, I&apos;ve been involved in both frontend and backend development, working on awesome
					stack such as Next.js, Strapi, Tailwind CSS, Docker... However, for the first time in my life, I find myself wanting to be behind the scenes and study how the tools I love are in depth working.
				</p>
				<p>
					I aspire to become a great developer, teacher, publishing great posts and publications on platforms like X, Linkedin or Medium, and making amazing pull requests for the developer community. I admire those who take the time to do
					so because I would love to offer similar contributions. The truth is, I often find myself too focused on my own projects and clients, neglecting to share my knowledge and experiences with others. But I like reviewing and give
					advices to my Anywwwhere&apos;s junior developers or make video on my YouTube channel. I often have a good feedback from them, so I feel I have something to work on. This is an aspect that I hope to improve, and it&apos;s one of
					the reasons why I&apos;m interested in joining Tailwind Labs.
				</p>
				<p>
					I am exciting to have the chance of building things and improve Tailwind features. I thinking about this discussion on the{" "}
					<Link href="https://github.com/tailwindlabs/tailwindcss/discussions/7560" className="underline" target="_tagert">
						Tailwind Prettier Plugin
					</Link>{" "}
					. I also thinking about multiple website starters monorepo <b>Next.js</b> with an Headless CMS (and not only markdowns) such as <b>Strapi</b> (Yes I love this guy) based on Tailwind CSS. Why do not develop a Wordpress builder or
					starter theme to bring Tailwind into this famous existing CMS ? I still have so much things to learn, and I hope you can give me the opportunity to reach the next step of my career and become a greater developer and contributor to
					the open-source community.
				</p>
				<p>Thank you for considering me and thank you for reading me.</p>
			</div>
		</section>
	)
}
