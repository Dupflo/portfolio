const Heading = ({ first, second, third }: { first: string; second: string; third: string }) => {
	return (
		<h1 className="w-full text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold capitalize flex space-y-5 flex-col">
			<span className="h-[40px] md:h-[80px] lg:h-[72px] xl:h-[95px] overflow-hidden relative">
				<span className="absolute translate-y-full animate-reveal-to-top animation-delay-1000">{first}</span>
			</span>
			<span className="h-[40px] md:h-[80px] lg:h-[72px] xl:h-[106px] overflow-hidden relative">
				<span className="absolute translate-y-full animate-reveal-to-top animation-delay-1200">{second}</span>
			</span>
			<span className="h-[40px] md:h-[80px] lg:h-[75px] xl:h-[106px] overflow-hidden relative">
				<span className="absolute translate-y-full animate-reveal-to-top animation-delay-1500">{third}</span>
			</span>
		</h1>
	)
}

export default Heading
