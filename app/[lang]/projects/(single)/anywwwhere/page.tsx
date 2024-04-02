"use client"
import ENVersion from "./en-version.mdx"
import FRVersion from "./fr-version.mdx"

export default function ContentPage({ params: { lang } }: { params: { lang: string } }) {
	if (lang === "en") return <ENVersion />
	if (lang === "fr") return <FRVersion />
}
