import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

const pages = [{ name: "Projects", href: "/projects", current: false }]

export default function Breadcrumb({ parent, name }: { parent: string; name: string }) {
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol role="list" className="flex items-center space-x-4 list-none p-0 mx-0">
				<li>
					<div>
						<Link href="/" className="text-gray-400 hover:text-gray-500">
							<HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
							<span className="sr-only">Home</span>
						</Link>
					</div>
				</li>
				<li>
					<div className="flex items-center">
						<ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
						<Link href="/projects" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
							{parent}
						</Link>
					</div>
				</li>
				<li>
					<div className="flex items-center">
						<ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
						<span className="ml-4 text-sm text-gray-500 hover:text-gray-700" aria-current={"page"}>
							{name}
						</span>
					</div>
				</li>
			</ol>
		</nav>
	)
}
