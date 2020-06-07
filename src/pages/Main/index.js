import React,{useState} from 'react';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import './styles.css';
import Carrousel from '../../components/Carrousel';
import Items from '../../components/Items';
import {useHistory} from 'react-router-dom';
import lives from '../../lives.json'
import logo from '../../assets/LiveHub.png'

function App() {

  const history= useHistory();
  const[label,setLabel] = useState(1)

  function toRight(){
    if(label >= 5){
      setLabel(1)
    }
    else{
      setLabel(label + 1)
    }
  }

  function toLeft(){
    if(label <= 1){
      setLabel(5)
    }
    else{
    setLabel(label - 1)
    }
  }


  return (
    <div className="App">
      <header>
				<div onClick={() => history.push('/')} id="header-left">
          <img alt="perfil" src={logo}></img>
				</div>
				<div id="header-center">

				</div>
				<div id="header-right">

				</div>
      </header>
      <div id="main-body">
        <div id="carrousel">
          <button onClick={toLeft}><FiChevronLeft size={22} strokeWidth="3" /></button>
          <div id="main-carrousel">
            <Carrousel label={label} />
          </div>
          <button onClick={toRight}><FiChevronRight size={22} strokeWidth="3" /></button>
        </div>
        <Items data={lives} />
			</div>
    </div>
  );
}

export default App;
