"use client"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function WindowMockup({ title, children }: { title: string; children: any }) {
	return (
		<div className="w-full mx-auto my-10">
			<div className="w-full h-11 relative rounded-t-lg bg-gray-700 flex justify-start items-center space-x-1.5 px-3">
				<span className="w-3 h-3 rounded-full bg-red-400"></span>
				<span className="w-3 h-3 rounded-full bg-yellow-400"></span>
				<span className="w-3 h-3 rounded-full bg-green-400"></span>
				<span className="text-white flex-1 text-right">{title}</span>
			</div>
			<SyntaxHighlighter language="typescript" customStyle={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, marginTop: -5, lineHeight: "0.75", fontSize: "0.8em" }} style={nightOwl}>
				{children}
			</SyntaxHighlighter>
		</div>
	)
}
