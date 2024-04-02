"use client"

import Link from "next/link"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Title from "./Elements/Title"
import ProjectCard from "./ProjectCard"

const Projects = ({ data, lang }: any) => {
	return (
		<section id="projects" className="scroll-mt-[80px] py-20 bg-slate-100 overflow-hidden">
			<div className="px-5 lg:px-10 xl:px-24 lg:py-5">
				<Title>{data.title}</Title>
				<Swiper modules={[Pagination, Scrollbar, A11y, Navigation]} navigation grabCursor pagination={{ clickable: true }} spaceBetween={25} slidesPerView="auto">
					{data.items
						.filter((project: any) => project.homepage_position)
						.sort((a: any, b: any) => a.homepage_position - b.homepage_position)
						.map((project: any) => (
							<SwiperSlide key={project.id} lang={lang} className="max-w-xs  overflow-hidden text-slate-800 shadow-md duration-200 md:hover:scale-105 hover:shadow-xl  rounded-xl">
								<ProjectCard project={project} locale={lang} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
			<div className="mt-10 flex items-center">
				<Link href={`/${lang}/projects`} className="mt-2 px-5 mx-auto text-center rounded-md bg-slate-800 py-2 text-slate-100 hover:bg-slate-800 hover:shadow-md duration-75">
					{lang === "en" ? "See more projects" : "Voir plus de projets"}
				</Link>
			</div>
		</section>
	)
}

export default Projects
