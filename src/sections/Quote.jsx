const Quote = ({ quote }) => {
	return (
		<section className="c-space my-20" id="experience">
			<div className="w-full text-white-600">
				<p className="head-text">
					<i>{quote}</i>
				</p>
			</div>
		</section>
	);
};

export default Quote;
