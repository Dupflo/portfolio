import { ReactNode } from "react"

const Title = ({ children }: { children: ReactNode }) => {
	return <h2 className="text-3xl leading-[3rem] lg:text-5xl text-slate-700 font-bold text-center mb-10 capitalize" dangerouslySetInnerHTML={{ __html: children as string }} />
}

export default Title
