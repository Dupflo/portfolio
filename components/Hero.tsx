"use client"

import { Autoplay, EffectFlip } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Javascript from "../assets/svg/javascript.svg"
import NextJS from "../assets/svg/nextjs-icon.svg"
import Node from "../assets/svg/nodejs-icon.svg"
import Prestashop from "../assets/svg/prestashop-icon.svg"
import ReactIcon from "../assets/svg/react.svg"
import Typescript from "../assets/svg/typescript-icon.svg"
import Vue from "../assets/svg/vue.svg"
import Wordpress from "../assets/svg/wordpress-icon.svg"
import Heading from "../components/Heading"
import TechItem from "../components/TechItem"

const Hero = ({ data }: any) => {
	return (
		<div id="home" className="scroll-mt-[80px] px-5 pt-3 pb-5 lg:py-16 lg:px-10 xl:px-20 text-slate-800 p-6  mx-auto md:flex flex-wrap flex-1 justify-between items-center overflow-hidden">
			<div className="md:w-3/5 flex">
				<Heading first={data.word1} second={data.word2} third={data.word3} />
			</div>
			<div className="md:w-2/5 flex flex-col translate-x-[100vw] animate-reveal-to-left animation-delay-1000">
				<h1 className="text-4xl md:text-4xl lg:text-5xl flex items-end font-bold py-6">
					<span className="mr-3">I&apos;m</span>
					<Swiper
						effect={"flip"}
						grabCursor={true}
						modules={[EffectFlip, Autoplay]}
						className="flip-swiper"
						flipEffect={{ slideShadows: false }}
						loop
						autoplay={{
							delay: 1000,
							disableOnInteraction: false,
						}}
					>
						<SwiperSlide>
							<Javascript className="h-full w-full relative top-3" />
						</SwiperSlide>
						<SwiperSlide>
							<Typescript className="h-full w-full relative top-3" />
						</SwiperSlide>
						<SwiperSlide>
							<ReactIcon className="h-full w-full relative top-4" />
						</SwiperSlide>
						<SwiperSlide>
							<NextJS className="h-full w-full relative top-4" />
						</SwiperSlide>
						<SwiperSlide>
							<Vue className="h-full w-full relative top-4" />
						</SwiperSlide>
						<SwiperSlide>
							<Node className="h-full w-full relative top-2" />
						</SwiperSlide>
						<SwiperSlide>
							<Wordpress className="h-full w-full relative top-3" />
						</SwiperSlide>
						<SwiperSlide>
							<Prestashop className="h-full w-full relative top-3" />
						</SwiperSlide>
					</Swiper>
					<span>developer</span>
				</h1>
				<div className="tracking-wider border-l lg:ml-1.5">
					<TechItem className="hover:bg-blue-500 hover:text-white">React.JS</TechItem>
					<TechItem className="hover:bg-black hover:text-white">Next.JS</TechItem>
					<TechItem className="hover:bg-purple-800 hover:text-white">Gatsby.JS</TechItem>
					<TechItem className="hover:bg-green-400">Vue.JS</TechItem>
					<TechItem className="hover:bg-green-400 hover:text-white">Nuxt.JS</TechItem>
					<TechItem className="hover:bg-green-800 hover:text-white">Node.JS</TechItem>
					<TechItem className="hover:bg-cyan-500 hover:text-white">Tailwind CSS</TechItem>
					<TechItem className="hover:bg-orange-400 hover:text-white">Git</TechItem>
					<TechItem className="hover:bg-sky-500 hover:text-white">Docker</TechItem>
					<TechItem className="hover:bg-purple-400 hover:text-white">Strapi</TechItem>
					<TechItem className="hover:bg-blue-400 hover:text-white">Wordpress</TechItem>
					<TechItem className="hover:bg-rose-500 hover:text-white">Prestashop</TechItem>
				</div>
			</div>
		</div>
	)
}

export default Hero
