import React,{useState} from 'react';
import {Collapse} from 'react-collapse';
import api from '../services/api';
import './styles.css';

export default function Box(params){

	const [col] = useState(true);
	const [height, setHeight] = useState(230)

	const [buttonName,setButtonName] = useState(`Mostrar mais`)

	async function change(){
		
		if(height === 230){
			setHeight("100%");
			setButtonName(`Mostrar menos`)
		}
		else{
			setHeight(230);
			setButtonName(`Mostrar mais`)
		}

	}

  return(
		<div>
			<div className="box-title">
				<h1>{params.items.categoria}</h1>
			</div>
			<div className="div-box">
				<Collapse isOpened={col}>
				<div style={{height:height}} id="box">
					{params.items.descricao.map((i,_id) => {

						return(

						<div key={_id} className="box-items">
							<div className="box-image">
								<img onClick={()=> window.open(`${i.link}`, "_blank")} alt="perfil" src={"https://semeandoafeto.imadel.org.br/packages/trustir/exclusiva/img/user_placeholder.png"}></img>
							</div>
							<div className="box-info">
								<img alt="perfil" src={"https://semeandoafeto.imadel.org.br/packages/trustir/exclusiva/img/user_placeholder.png"}></img>
								<div>
									<h5>{i.nome}</h5>
									<p>instagram</p>
								</div>
							</div>
						</div>
						)
					})}
				</div>
				</Collapse>
			</div >
			<div className="box-button">
				<div />
					<button id="mycontentbutton" onClick={() => change()}>{buttonName}</button>
				<div />
			</div>
		</div>
	)

}