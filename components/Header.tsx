"use client"
import cn from "classnames"
import Link from "next/link"
import { useEffect, useState } from "react"

const Header = ({ name, data }: any) => {
	const [displayShadow, setDisplayShadow] = useState(false)

	useEffect(() => {
		const dipslayShadow = () => {
			if (window && window.scrollY > 10) {
				setDisplayShadow(true)
			} else setDisplayShadow(false)
		}
		window.addEventListener("scroll", dipslayShadow)
		dipslayShadow()
		return () => window.removeEventListener("scroll", dipslayShadow)
	}, [])

	return (
		<header className={cn(!displayShadow ? "shadow-white" : "shadow-slate-100", "bg-white text-slate-800 sticky top-0 z-20 duration-500 transition ease-in-out shadow")}>
			<div className="px-5 py-3 md:px-10 xl:px-20 md:py-5 z-10  mx-auto md:flex space-y-3 md:space-y-0 items-baseline justify-between">
				<Link href="/">
					<h1 className="p-1 text-center text-xl md:text-2xl font-semibold">{name}</h1>
				</Link>
				<ul className="hidden lg:flex justify-center space-x-[5%] md:space-x-10 tracking-wider font-medium">
					{data?.map((item: any) => (
						<li className="text-sm md:text-base" key={item.id}>
							<a href={item.href}>{item.title}</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	)
}

export default Header
