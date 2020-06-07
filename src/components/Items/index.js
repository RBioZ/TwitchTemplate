import React from 'react';
import './styles.css'
import Box from './DivContent'

export default function Items(params){
  return(
		params.data.map((i,_id) => {
			return <Box key={_id} items={i} />
		})
	)
}































/*
		<div>
			<Collapse isOpened={col}>
			<div style={{height:h}} id="pai">
				<div className="filha"></div>
				<div className="filha"></div>
				<div className="filha"></div>
				<div className="filha"></div>
				<div className="filha"></div>
			</div>
			</Collapse>
			<button id="mycontentbutton" onClick={() => change()}>press to see</button>
		</div>
		)
		*/