import React from 'react';

import './styles.css';

export default function Carrousel(params){


	return(
		<section id="slider">
			<input type="radio" name="slider" id="s1" checked={params.label === 1 ? true : false} onChange={() => {}}/>
			<input type="radio" name="slider" id="s2" checked={params.label === 2 ? true : false} onChange={() => {}}/>
			<input type="radio" name="slider" id="s3" checked={params.label === 3 ? true : false} onChange={() => {}}/>
			<input type="radio" name="slider" id="s4" checked={params.label === 4 ? true : false} onChange={() => {}}/>
			<input type="radio" name="slider" id="s5" checked={params.label === 5 ? true : false} onChange={() => {}}/>
			<label htmlFor="s1" id="slide1">
				<div className="video">
					<iframe title={"1"} width="100%" height="100%" src="https://www.youtube.com/embed/HmZKgaHa3Fg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				<div className="info">
					1
				</div>
			</label>
			<label htmlFor="s2" id="slide2">
				<div className="video">
					<iframe title={"2"} width="100%" height="100%" src="https://www.youtube.com/embed/QAUzWtLMnU0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				<div className="info">
					2
				</div>
			</label>
			<label htmlFor="s3" id="slide3">
				<div className="video">

				</div>
				<div className="info">
					3
				</div>
			</label>
			<label htmlFor="s4" id="slide4">
				<div className="video">

				</div>
				<div className="info">
					4
				</div>
			</label>
			<label htmlFor="s5" id="slide5">
				<div className="video">

				</div>
				<div className="info">
					5
				</div>
			</label>
		</section>
	);
}