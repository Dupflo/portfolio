import { BookOpenIcon, EyeIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import LightStack from "./LightStack"

export default function ProjectCard({ project, locale }: any) {
	return (
		<div className="w-full h-full flex flex-col justify-start mx-auto rounded-xl bg-white">
			<div className="relative w-full h-[200px]">
				{project.link && (
					<Link href={`/${locale}/projects/${project.link}`}>
						<Image src={project.thumbnail} alt={project.name} className="object-cover object-center" fill />
					</Link>
				)}
				{project.external_link && (
					<Link href={project.external_link} target="_blank">
						<Image src={project.thumbnail} alt={project.name} className="object-cover object-center" fill />
					</Link>
				)}
			</div>
			<div className="p-5 flex-1 flex flex-col justify-between">
				<div>
					<h2 className="text-xl font-semibold mb-2">{project.name}</h2>
					<p className="text-medium mb-5 ">{project.description}</p>
				</div>
				<LightStack data={project.stack} />
				{project.link && (
					<Link
						href={`/${locale}/projects/${project.link}`}
						className="flex cursor-pointer items-center justify-center space-x-2 mt-2 w-full text-center rounded-md bg-slate-800  py-2 text-slate-100 hover:bg-slate-800 hover:shadow-md duration-75"
					>
						<BookOpenIcon className="w-5" />
						<span>{locale === "en" ? "Read more" : "En savoir plus"}</span>
					</Link>
				)}
				{project.external_link && (
					<Link
						href={project.external_link}
						className="flex cursor-pointer items-center justify-center space-x-2 mt-2 w-full text-center rounded-md bg-slate-800  py-2 text-slate-100 hover:bg-slate-800 hover:shadow-md duration-75"
						target="_blank"
					>
						<EyeIcon className="w-5" />
						<span>{locale === "en" ? "See project" : "Voir le projet"}</span>
					</Link>
				)}
			</div>
		</div>
	)
}
