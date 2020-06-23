import React, {useState, useEffect} from 'react';
import { Collapse } from 'react-collapse';
import ReactPlayer from 'react-player';
import './styles.css';

// Hook
function useWindowSize() {
	const isClient = typeof window === 'object';
  
	function getSize() {
	  return {
		width: isClient ? window.innerWidth : undefined,
		height: isClient ? window.innerHeight : undefined
	  };
	}
  
	const [windowSize, setWindowSize] = useState(getSize);
  
	useEffect(() => {
	  if (!isClient) {
		return false;
	  }
	  
	  function handleResize() {
		setWindowSize(getSize());
	  }
  
	  window.addEventListener('resize', handleResize);
	  return () => window.removeEventListener('resize', handleResize);
	  
  	}, [isClient,getSize]); // Empty array ensures that effect is only run on mount and unmount
  
	return windowSize;
  }

export default function Box(params){

	const [col] = useState(true);
	const [height, setHeight] = useState(230);
	const size = useWindowSize();
	const [buttonName,setButtonName] = useState(`Mostrar mais`);
	const [qtd,setQtd] = useState((size.width - (size.width * 0.04)) / 310);

	async function change(){
		
		if(height === 230){
			setHeight("100%");
			setButtonName(`Mostrar menos`)
			console.log(qtd)
		}
		else{
			setHeight(230);
			setButtonName(`Mostrar mais`)
			console.log(qtd)
		}

	}

	useEffect(() => setQtd((size.width - (size.width * 0.04)) / 310), [size])

	return(
			<div>
				<div className="box-title">
					<h1>{params.items.categoria}</h1>
				</div>
				<div className="div-box">
					<Collapse isOpened={col}>
					<div style={{height:height}} id="box">
						{params.items.descricao.map((i,_id) => {
							let content = ""
							if (i.rede_social === 'YouTube') {
								content = <ReactPlayer width="100%" height="100%" url={i.link} />
							} else if (i.rede_social === 'Instagram') {
								content = <img onClick={()=> window.open(`${i.link}`, "_blank")} alt="perfil" src={i.profile_picture}></img>
							}
							return (
								<div id="flex" key={_id}>
								<div key={_id} className="box-items">
									<div className="box-image">
										{content}
									</div>
									<div className="box-info">
										<img alt="perfil" src={i.profile_picture ? i.profile_picture : 'https://semeandoafeto.imadel.org.br/packages/trustir/exclusiva/img/user_placeholder.png'}></img>
										<div>
											<h5>{i.nome}</h5>
											<p>{i.rede_social}</p>
										</div>
									</div>
								</div>
								</div>
							)
						})}
					</div>
					</Collapse>
				</div >
				<div className="box-button">

					{params.items.descricao.length > qtd 
					? 
					<>
					<div />
						<button id="mycontentbutton" onClick={() => change()}>{buttonName}</button>
					<div />
					</>	
					:
					<>
						<div style={{marginTop:'10px',marginBottom:'10px',width:"100%"}} />
					</>
				}
				</div>
			</div>
		)
}