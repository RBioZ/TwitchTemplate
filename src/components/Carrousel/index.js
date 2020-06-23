import React from 'react';
import ReactPlayer from 'react-player';

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
				<ReactPlayer width="100%" height="100%" url="https://www.youtube.com/watch?v=F8z_uqFUB6U" />
				</div>
				<div className="info">
					CNN BRASIL - AO VIVO
				</div>
			</label>
			<label htmlFor="s2" id="slide2">
				<div className="video">
					<ReactPlayer width="100%" height="100%" url="https://www.youtube.com/watch?v=16lr-G4s9KY" />
				</div>
				<div className="info">
					AS 11 REGRAS DO MICHAEL JORDAN PRO SUCESSO! (e que você pode aplicar AGORA na sua vida)
				</div>
			</label>
			<label htmlFor="s3" id="slide3">
				<div className="video">
					<ReactPlayer width="100%" height="100%" url="https://www.youtube.com/watch?v=Q-HNndzjtMM" />
				</div>
				<div className="info">
					NINGUÉM VEIO ME CONTAR, VI E FILMEI TUDO, DE ARREPIAR!!! É pescaria.
				</div>
			</label>
			<label htmlFor="s4" id="slide4">
				<div className="video">
					<ReactPlayer width="100%" height="100%" url="https://www.youtube.com/watch?v=DDU-rZs-Ic4" />
				</div>
				<div className="info">
					WATCH NASA: Astronaut Spacewalk #RealTimeTracker NASA FEED | 24/7 Earth Viewing cameras
				</div>
			</label>
			<label htmlFor="s5" id="slide5">
				<div className="video">
					<ReactPlayer width="100%" height="100%" url="https://www.youtube.com/watch?v=uO8As5gAlPY" />
				</div>
				<div className="info">
					Day Trade Real - R$ 25 mil Em Um Dia! Meu 13º Salário como Trader! | Ganhando a Vida Adoidado!
				</div>
			</label>
		</section>
	);
}