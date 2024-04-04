"use client"

import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import { ReactNode, useEffect, useRef } from "react"

hljs.registerLanguage("typescript", typescript)

export default function WindowMockup({ title, children }: { title: string; children: ReactNode }) {
	const codeRef = useRef<HTMLElement>(null)

	useEffect(() => {
		hljs.highlightBlock(codeRef?.current!)
	}, [])
	return (
		<div className="w-full mx-auto my-10">
			<div className="w-full h-11 relative rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3">
				<span className="w-3 h-3 rounded-full bg-red-400"></span>
				<span className="w-3 h-3 rounded-full bg-yellow-400"></span>
				<span className="w-3 h-3 rounded-full bg-green-400"></span>
				<span className="text-white flex-1 text-right">{title}</span>
			</div>
			<pre className="bg-gray-700 border-t-0 my-0 rounded-t-none">
				<code className="javascript bg-transparent" ref={codeRef}>
					{children}
				</code>
			</pre>
		</div>
	)
}
