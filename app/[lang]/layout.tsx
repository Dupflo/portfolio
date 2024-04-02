import LangSwitcher from "@/components/LangSwitcher"
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
