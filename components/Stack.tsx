import NextJs from "../assets/svg/nextjs.svg"
import Strapi from "../assets/svg/strapi.svg"
import Tailwind from "../assets/svg/tailwindcss.svg"
import TypeScript from "../assets/svg/typescript-icon.svg"
import Vercel from "../assets/svg/vercel.svg"
import Title from "./Elements/Title"

const Stack = ({ data }: any) => {
	return (
		<div className="py-20 px-5 lg:px-10 xl:px-24">
			<Title>{data.title}</Title>
			<div className="grid grid-cols-1 gap-10 lg:grid-cols-5 items-center justify-center">
				<a href="https://nextjs.org/" className="duration-200 md:hover:scale-110" rel="noreferrer" target="_blank">
					<NextJs className="w-28 mx-auto" />
				</a>
				<a href="https://strapi.io/" className="duration-200 md:hover:scale-110" rel="noreferrer" target="_blank">
					<Strapi className="w-40 mx-auto" />
				</a>
				<a href="https://tailwindcss.com/" className="duration-200 md:hover:scale-110" rel="noreferrer" target="_blank">
					<Tailwind className="w-40 mx-auto" />
				</a>
				<a href="https://vercel.com/" className="duration-200 md:hover:scale-110" rel="noreferrer" target="_blank">
					<Vercel className="w-32 mx-auto" />
				</a>
				<a href="https://www.typescriptlang.org/" className="duration-200 md:hover:scale-110" rel="noreferrer" target="_blank">
					<TypeScript className="w-20 mx-auto" />
				</a>
			</div>
		</div>
	)
}

export default Stack
