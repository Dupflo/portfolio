import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function ProjectLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	return (
		<main className="prose px-5 pt-3 pb-5 lg:py-16 lg:px-10 xl:px-20 prose-h1:uppercase prose-p:leading-relaxed max-w-screen-xl mx-auto">
			<Link href="/projects" className="mb-5 flex items-center space-x-2 no-underline text-md text-gray-500">
				<ArrowLeftIcon className="w-4" />
				<span>Go back</span>
			</Link>

			{children}
		</main>
	)
}
