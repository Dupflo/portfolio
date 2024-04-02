/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-key */
import AfterEffect from "@/assets/svg/after-effect.svg"
import Azure from "@/assets/svg/azure-icon.svg"
import ChakraUI from "@/assets/svg/chakra-ui.svg"
import Cloudflare from "@/assets/svg/cloudflare.svg"
import Divi from "@/assets/svg/divi.svg"
import Docker from "@/assets/svg/docker-icon.svg"
import Elementor from "@/assets/svg/elementor.svg"
import Firebase from "@/assets/svg/firebase-icon.svg"
import Gatsby from "@/assets/svg/gatsby.svg"
import Heroku from "@/assets/svg/heroku.svg"
import Illustrator from "@/assets/svg/illustrator.svg"
import InDesign from "@/assets/svg/indesign.svg"
import NextJs from "@/assets/svg/nextjs.svg"
import Node from "@/assets/svg/nodejs-icon.svg"
import Nuxt from "@/assets/svg/nuxt.svg"
import Oxygen from "@/assets/svg/oxygen-icon.svg"
import Photoshop from "@/assets/svg/photoshop.svg"
import PremierePro from "@/assets/svg/premiere-pro.svg"
import Prestashop from "@/assets/svg/prestashop.svg"
import ReactIcon from "@/assets/svg/react.svg"
import Strapi from "@/assets/svg/strapi.svg"
import Stripe from "@/assets/svg/stripe.svg"
import StyledComponent from "@/assets/svg/styled-components.svg"
import Supabase from "@/assets/svg/supabase.svg"
import TailwindUI from "@/assets/svg/tailwind-ui.svg"
import Tailwind from "@/assets/svg/tailwindcss.svg"
import TypeScript from "@/assets/svg/typescript-icon.svg"
import Vercel from "@/assets/svg/vercel.svg"
import Vue from "@/assets/svg/vue.svg"
import Wordpress from "@/assets/svg/wordpress-icon.svg"
import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"

type StackProps = { data: string[] } // Correction de StackProps

const Stack = ({ data }: StackProps) => {
	const renderLogo = (stackName: string) => {
		switch (stackName) {
			case "nextjs":
				return [<NextJs className="w-24" />, "https://nextjs.org/"]
			case "chakraui":
				return [<ChakraUI className="w-24" />, "https://chakra-ui.com/"]
			case "cloudflare":
				return [<Cloudflare className="w-24" />, "https://www.cloudflare.com/"]
			case "divi":
				return [<Divi className="w-24" />, "https://www.elegantthemes.com/"]
			case "docker":
				return [<Docker className="w-16" />, "https://www.docker.com/"]
			case "elementor":
				return [<Elementor className="w-24" />, "https://elementor.com/"]
			case "firebase":
				return [<Firebase className="w-24" />, "https://firebase.google.com/"]
			case "gatsby":
				return [<Gatsby className="w-24" />, "https://www.gatsbyjs.com/"]
			case "heroku":
				return [<Heroku className="w-32" />, "https://heroku.com/"]
			case "nuxt":
				return [<Nuxt className="w-24" />, "https://nuxt.com/"]
			case "stripe":
				return [<Stripe className="w-24" />, "https://stripe.com/"]
			case "styled-component":
				return [<StyledComponent className="w-24" />, "https://styled-components.com/"]
			case "tailwindui":
				return [<TailwindUI className="w-40" />, "https://tailwindui.com/"]
			case "strapi":
				return [<Strapi className="w-28 mx-auto" />, "https://strapi.io/"]
			case "tailwindcss":
				return [<Tailwind className="w-40 mx-auto" />, "https://tailwindcss.com"]
			case "vercel":
				return [<Vercel className="w-28 mx-auto" />, "https://vercel.com"]
			case "typescript":
				return [<TypeScript className="w-20 mx-auto" />, "https://www.typescriptlang.org"]
			case "wordpress":
				return [<Wordpress className="w-xx mx-auto" />, "https://wordpress.org"]
			case "prestashop":
				return [<Prestashop className="w-24 mx-auto" />, "https://prestashop.fr"]
			case "node":
				return [<Node className="w-xx mx-auto" />, "https://nodejs.org"]
			case "reactjs":
				return [<ReactIcon className="w-xx mx-auto" />, "https://fr.legacy.reactjs.org"]
			case "vuejs":
				return [<Vue className="w-xx mx-auto" />, "https://vuejs.org"]
			case "supabase":
				return [<Supabase className="w-36 mx-auto" />, "https://supabase.com/"]
			case "firebase":
				return [<Vue className="w-xx mx-auto" />, "https://firebase.google.com"]
			case "chakraui":
				return [<ChakraUI className="w-xx mx-auto" />, "https://chakra-ui.com"]
			case "elementor":
				return [<Elementor className="w-xx mx-auto" />, "https://elementor.com"]
			case "oxygen-builder":
				return [<Oxygen className="w-xx mx-auto" />, "https://oxygenbuilder.com"]
			case "azure":
				return [<Azure className="w-16" />, "https://dev.azure.com"]
			case "photoshop":
				return [<Photoshop className="w-20" />, "https://www.adobe.com"]
			case "illustrator":
				return [<Illustrator className="w-20" />, "https://www.adobe.com"]
			case "indesign":
				return [<InDesign className="w-20" />, "https://www.adobe.com"]
			case "after-effect":
				return [<AfterEffect className="w-20" />, "https://www.adobe.com"]
			case "premiere-pro":
				return [<PremierePro className="w-20" />, "https://www.adobe.com"]
			default:
				return []
		}
	}

	return (
		<div className="pb-5 flex flex-wrap gap-10 items-center justify-start">
			{data?.map((stackName, index) => (
				<Link key={index} href={renderLogo(stackName)[1] as Url} className="duration-200 md:hover:scale-110" rel="noreferrer" target="_blank">
					{renderLogo(stackName)[0]}
				</Link>
			))}
		</div>
	)
}

export default Stack
