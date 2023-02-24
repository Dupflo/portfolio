import Image from "next/image"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Title from "./Elements/Title"

const Projects = ({ data }: any) => {
	return (
		<section id="projects" className="scroll-mt-[80px] py-20 bg-slate-100 overflow-hidden">
			<div className="px-5 lg:px-10 xl:px-24 lg:py-5">
				<Title>{data.title}</Title>
				<Swiper modules={[Pagination, Scrollbar, A11y, Navigation]} navigation grabCursor pagination={{ clickable: true }} spaceBetween={25} slidesPerView="auto">
					{data.items.map((project: any) => (
						<SwiperSlide key={project.id} className="max-w-xs  overflow-hidden text-slate-800 shadow-md duration-200 md:hover:scale-105 hover:shadow-xl  rounded-xl">
							<div className="w-full mx-auto rounded-xl bg-white">
								<Image src={project.thumbnail} alt={project.name} width={320} height={213} className="h-auto w-full" />
								<div className="p-5">
									<h2 className="text-xl font-semibold mb-2">{project.name}</h2>
									<p className="text-medium mb-5 ">{project.description}</p>

									{project.link && (
										<a href={project.link} className="mt-2 w-full block text-center rounded-md bg-slate-800  py-2 text-slate-100 hover:bg-slate-800 hover:shadow-md duration-75" target="_blank" rel="noreferrer">
											{data.button}
										</a>
									)}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Projects
