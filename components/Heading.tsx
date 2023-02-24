const Heading = ({ first, second, third }: { first: string; second: string; third: string }) => {
	return (
		<h1 className="w-full text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold capitalize flex flex-col">
			<span className="h-[65px] md:h-[80px] lg:h-[105px] xl:h-[135px] overflow-hidden relative">
				<span className="absolute translate-y-full animate-reveal-to-top animation-delay-1000">{first}</span>
			</span>
			<span className="h-[65px] md:h-[80px] lg:h-[105px] xl:h-[135px] overflow-hidden relative">
				<span className="absolute translate-y-full animate-reveal-to-top animation-delay-1200">{second}</span>
			</span>
			<span className="h-[65px] md:h-[80px] lg:h-[105px] xl:h-[135px] overflow-hidden relative">
				<span className="absolute translate-y-full animate-reveal-to-top animation-delay-1500">{third}</span>
			</span>
		</h1>
	)
}

export default Heading
