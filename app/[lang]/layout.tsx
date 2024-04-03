import LangSwitcher from "@/components/LangSwitcher"
import { Metadata, ResolvingMetadata } from "next"
import Script from "next/script"
import "react-toastify/dist/ReactToastify.css"
import "swiper/css"
import "swiper/css/effect-flip"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "../../assets/styles/globals.css"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ClientProvider from "./client-provider"
import { getDictionary } from "./dictionaries"

type Props = {
	params: { lang: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	if (params.lang === "en") {
		return {
			title: "Florian Dupuis | Web Developer & Entrepreneur",
			description: "Hello, my name is Florian Dupuis, and I'm a 27-year-old freelance web developer. I've been coding for over 10 years, and I love exploring new technologies in the digital realm, particularly within the web sphere.",
			openGraph: {
				images: ["/_next/image?url=%2Fimg%2Fprofil.jpeg&w=1920&q=75"],
			},
		}
	}
	return {
		title: "Florian Dupuis | Développeur Fullstack & entrepreneur",
		description: "Je suis un développeur web indépendant de 27 ans. Je code depuis plus de 10 ans et j'adore explorer les nouvelles technologies dans le domaine numérique, en particulier dans le domaine du web. ",
		openGraph: {
			images: ["/_next/image?url=%2Fimg%2Fprofil.jpeg&w=1920&q=75"],
		},
	}
}

export default async function RootLayout({ children, params: { lang } }: { children: React.ReactNode; params: { lang: "en" | "fr" } }) {
	const navigation = await getDictionary(lang, "navigation")
	const home = await getDictionary(lang, "home")

	return (
		<html lang={lang}>
			<body>
				<Header name={home.meta.name} data={navigation} />
				{children}
				<LangSwitcher lang={lang} />
				<ClientProvider />
				<Footer />
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
						(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
						m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
						})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

						ga('create', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', 'auto');
						ga('send', 'pageview');
					`}
				</Script>
			</body>
		</html>
	)
}