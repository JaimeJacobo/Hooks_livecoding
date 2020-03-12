import React, { useState, useEffect } from 'react';
import './App.css';

 function App() {

  // const myHooksState = useState({
  //   ciudad: 'Madrid',
  //   escuela: 'Wild Code School',
  //   infected: false
  // })

  // const myState = myHooksState[0];
  // const changeMyState = myHooksState[1];

  //useState nos devuelve un array con dos items. El primer item será nuestro estado, y el segundo será una función que nos permite cambiar este estado si la llamamos.

    //MI PRIMER ESTADO
    const [myState, changeMyState] = useState({
      ciudad: 'Madrid',
      escuela: 'Wild Code School',
      infected: false
    })

    //MI SEGUNDO ESTADO
    const [myName, changeMyName] = useState('Jaime')

    //MI TERCER ESTADO
    const [myApiCall, changeMyApiCall] = useState('')

    //useEffect se activa despues del primer renderizado y se volverá a activar cuando se detecte un cambio de valor en el item que hemos introducido en el array del segudno argumento.
    useEffect(()=>{
      console.log('HOLA!!!')
    }, [myState.ciudad])

    //Equivalente a componentDidMount()
    useEffect(()=>{
      fetch('https://yesno.wtf/api')
      .then(res=>res.json())
      .then(resJSON=>changeMyApiCall(resJSON))
    }, [])

    return (
      <div className="App">
        <h1>Hola {myState.escuela} desde {myState.ciudad} Te saluda {myName} :D</h1>
        <button onClick={()=> changeMyState((prevState) =>({...prevState, ciudad: 'Barcelona'}))}>Change city</button>
        <button onClick={()=>changeMyName('Escuadra')}>CHANGE MY NAME</button>
      </div>
    );    

}

export default App;

