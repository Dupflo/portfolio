import Title from "@/components/Elements/Title"
import ProjectCard from "../../../components/ProjectCard"
import { getDictionary } from "../dictionaries"

export default async function Projects({ params: { lang } }: { params: { lang: string } }) {
	const projects = await getDictionary(lang, "projects")

	return (
		<section className="py-10 bg-slate-100 px-5 lg:px-10 xl:px-24">
			<Title>{lang === "en" ? "My Projects" : "Mes projets"}</Title>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
				{projects.map((project: any) => (
					<div key={project.id} className="overflow-hidden text-slate-800 shadow-md duration-200 md:hover:scale-105 hover:shadow-xl rounded-xl">
						<ProjectCard data={projects} project={project} locale={lang} />
					</div>
				))}
			</div>
		</section>
	)
}
