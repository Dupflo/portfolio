"use client"

import Link from "next/link"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Title from "./Elements/Title"
import ProjectCard from "./ProjectCard"

const Projects = ({ data, lang }: any) => {
	return (
		<section id="projects" className="scroll-mt-[80px] py-20 bg-slate-100 overflow-hidden">
			<div className="px-5 lg:px-10 xl:px-20 lg:py-5">
				<Title>{data.title}</Title>
				<p className="my-10 text-lg text-slate-700 text-center">
					Here is a list of a couple of projects I am proud of, which I have selected to showcase the different aspects and versatility of my profile. I write about some of them to keep a record, remember where I started from, and how they
					contributed to shaping the developer I am today. I hope you will quickly recognize the different technologies and that it will help you choose some projects to read.
				</p>
				<Swiper modules={[Pagination, Scrollbar, A11y, Navigation]} navigation grabCursor pagination={{ clickable: true }} spaceBetween={25} slidesPerView="auto">
					{data.items
						.filter((project: any) => project.homepage_position)
						.sort((a: any, b: any) => a.homepage_position - b.homepage_position)
						.map((project: any, index: number) => (
							<SwiperSlide key={index} lang={lang} className="max-w-xs overflow-hidden text-slate-800 shadow-md duration-200 md:hover:scale-105 hover:shadow-xl  rounded-xl">
								<ProjectCard project={project} locale={lang} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
			<div className="mt-10 flex items-center">
				<Link href="/projects" className="mt-2 px-5 mx-auto text-center rounded-md bg-slate-800 py-2 text-slate-100 hover:bg-slate-800 hover:shadow-md duration-75">
					See more projects
				</Link>
			</div>
		</section>
	)
}

export default Projects
