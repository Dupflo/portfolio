import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import Head from "next/head"
import About from "../components/About"
import Footer from "../components/Footer"
import Header from "../components/Header"

import Link from "next/link"
import { useRouter } from "next/router"
import { ToastContainer } from "react-toastify"
import "swiper/css"
import "swiper/css/effect-flip"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Stack from "../components/Stack"
import ENData from "./en.json"
import FRData from "./fr.json"

const Home: NextPage = ({ data }: any) => {
	const router = useRouter()
	const { asPath } = router
	const { navigation, hero, about, stack, projects, contact } = data

	return (
		<>
			<Head>
				<title>{data.meta.title}</title>
				<meta name="description" content={data.meta.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header name={data.meta.name} data={navigation} />
			<Hero data={hero} />
			<About data={about} name={data.meta.name} nickname={data.meta.nickname} />
			<Stack data={stack} />
			<Projects data={projects} />
			<Contact data={contact} />
			<Footer />
			<div className="fixed transition ease-in-out hover:bg-slate-200 bg-slate-800 hover:text-slate-800 text-white right-0 top-0 md:top-auto md:bottom-3 w-8 h-8 text-md flex items-center justify-center z-20">
				{router.locale === "fr" ? (
					<Link href={asPath} locale="en" scroll={false}>
						EN
					</Link>
				) : (
					<Link href={asPath} locale="fr" scroll={false}>
						FR
					</Link>
				)}
				<ToastContainer />
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const { locale } = context

	return {
		props: {
			data: locale === "fr" ? FRData : ENData,
		},
	}
}

export default Home
