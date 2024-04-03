import Stack from "@/components/Stack"
import About from "../../components/About"
import Contact from "../../components/Contact"
import Hero from "../../components/Hero"
import Projects from "../../components/Projects"
import { getDictionary } from "./dictionaries"

type Props = {
	params: { lang: string }
}

export default async function Page({ params: { lang } }: Props) {
	const data = await getDictionary(lang, "home")
	const projets = await getDictionary(lang, "projects")

	return (
		<section>
			<Hero data={data.hero} />
			<About data={data.about} name={data.meta.name} nickname={data.meta.nickname} />
			<Stack data={data.stack} />
			<Projects data={{ ...data.projects, items: projets }} lang={lang} />
			<Contact data={data.contact} />
		</section>
	)
}
