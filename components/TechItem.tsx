import classnames from "classnames"
import { ReactNode } from "react"

type Props = {
	children: ReactNode
	className: string
}

const TechItem = ({ children, className }: Props) => {
	return <h2 className={classnames("-mr-2 transition-all text-gray-800 hover:pl-5 ease-in-out text-2xl sm:text-3xl hover:translate-x-[12.5%] hover:scale-125 px-3 py-0.5 font-bold capitalize flex flex-col", className)}>{children}</h2>
}

export default TechItem
