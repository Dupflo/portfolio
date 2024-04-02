"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LangSwitcher({ lang }: { lang: string }) {
	const pathname = usePathname()

	if (!pathname) return null
	return (
		<div className="fixed transition ease-in-out hover:bg-slate-200 bg-slate-800 hover:text-slate-800 text-white right-0 top-0 md:top-6 md:bottom-unset w-8 h-8 text-md flex items-center justify-center z-20">
			{lang === "fr" ? (
				<Link href={pathname.replace("fr", "en")} scroll={false}>
					EN
				</Link>
			) : (
				<Link href={pathname.replace("en", "fr")} scroll={false}>
					FR
				</Link>
			)}
		</div>
	)
}
