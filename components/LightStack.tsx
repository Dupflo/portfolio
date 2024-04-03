/* eslint-disable react/jsx-key */
import AfterEffect from "@/assets/svg/after-effect.svg"
import Azure from "@/assets/svg/azure-icon.svg"
import ChakraUI from "@/assets/svg/chakra-ui-icon.svg"
import Cloudflare from "@/assets/svg/cloudflare-icon.svg"
import Divi from "@/assets/svg/divi-icon.svg"
import Docker from "@/assets/svg/docker-icon.svg"
import Elementor from "@/assets/svg/elementor-icon.svg"
import Firebase from "@/assets/svg/firebase-icon.svg"
import Gatsby from "@/assets/svg/gatsby-icon.svg"
import Heroku from "@/assets/svg/heroku-icon.svg"
import Illustrator from "@/assets/svg/illustrator.svg"
import InDesign from "@/assets/svg/indesign.svg"
import Javascript from "@/assets/svg/javascript.svg"
import Jest from "@/assets/svg/jest-svgrepo-com.svg"
import Koa from "@/assets/svg/koa.svg"
import Kubernetes from "@/assets/svg/kubernetes-icon.svg"
import NextJs from "@/assets/svg/nextjs-icon.svg"
import Node from "@/assets/svg/nodejs-icon.svg"
import Nuxt from "@/assets/svg/nuxt-icon.svg"
import Oxygen from "@/assets/svg/oxygen-icon.svg"
import Photoshop from "@/assets/svg/photoshop.svg"
import PremierePro from "@/assets/svg/premiere-pro.svg"
import Prestashop from "@/assets/svg/prestashop-icon.svg"
import ReactIcon from "@/assets/svg/react.svg"
import Strapi from "@/assets/svg/strapi-icon.svg"
import Stripe from "@/assets/svg/stripe-icon.svg"
import StyledComponent from "@/assets/svg/styled-components-icon.svg"
import Supabase from "@/assets/svg/supabase-icon.svg"
import TailwindUI from "@/assets/svg/tailwind-ui-icon.svg"
import Tailwind from "@/assets/svg/tailwindcss-icon.svg"
import TypeScript from "@/assets/svg/typescript-icon.svg"
import Vercel from "@/assets/svg/vercel-icon.svg"
import Vue from "@/assets/svg/vue.svg"
import Wordpress from "@/assets/svg/wordpress-icon.svg"

type StackProps = { data: string[] } // Correction de StackProps

const LightStack = ({ data }: StackProps) => {
	const renderLogo = (stackName: string) => {
		switch (stackName) {
			case "nextjs":
				return <NextJs className="w-7" />
			case "gatsby":
				return <Gatsby className="w-7" />
			case "strapi":
				return <Strapi className="w-6 mt-0.5" />
			case "tailwindcss":
				return <Tailwind className="w-9" />
			case "tailwindui":
				return <TailwindUI className="w-7" />
			case "vercel":
				return <Vercel className="w-7" />
			case "typescript":
				return <TypeScript className="w-20 mx-auto" />
			case "wordpress":
				return <Wordpress className="w-7" />
			case "prestashop":
				return <Prestashop className="w-8" />
			case "nodejs":
				return <Node className="w-7" />
			case "reactjs":
				return <ReactIcon className="w-8" />
			case "vuejs":
				return <Vue className="w-xx mx-auto" />
			case "nuxtjs":
				return <Nuxt className="w-8" />
			case "supabase":
				return <Supabase className="w-8" />
			case "chakraui":
				return <ChakraUI className="w-8" />
			case "oxygen-builder":
				return <Oxygen className="w-7" />
			case "styled-component":
				return <StyledComponent className="w-14" />
			case "heroku":
				return <Heroku className="w-6" />
			case "azure":
				return <Azure className="w-7" />
			case "docker":
				return <Docker className="w-9" />
			case "firebase":
				return <Firebase className="w-7" />
			case "stripe":
				return <Stripe className="w-7" />
			case "cloudflare":
				return <Cloudflare className="w-9" />
			case "elementor":
				return <Elementor className="w-7" />
			case "divi":
				return <Divi className="w-7" />
			case "javascript":
				return <Javascript className="w-7" />
			case "koa":
				return <Koa className="w-8" />
			case "kubernetes":
				return <Kubernetes className="w-9" />
			case "photoshop":
				return <Photoshop className="w-8" />
			case "illustrator":
				return <Illustrator className="w-8" />
			case "indesign":
				return <InDesign className="w-8" />
			case "after-effect":
				return <AfterEffect className="w-8" />
			case "premiere-pro":
				return <PremierePro className="w-8" />
			case "jest":
				return <Jest className="w-7" />
			default:
				return []
		}
	}

	return <div className="pb-5 flex flex-wrap gap-2 items-center justify-start">{data?.map((stackName, index) => renderLogo(stackName))}</div>
}

export default LightStack
