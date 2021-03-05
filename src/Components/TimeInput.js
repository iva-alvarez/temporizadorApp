import React, { useState } from 'react';
import { Reloj } from './Reloj';
import '../style.css';
import { Footer } from '../ui/Footer';


const TimeInput = () => {
     const [ minutos, setMinutos ] = useState('');
     const [ segundos, setSegundos ] = useState('00');
     
      
   const Handleminutos = (e) => {
     
     if(e.target.value < 0){
        return ;
     }else{
      setMinutos(e.target.value);
     }
     
   }
 
     let segundosRestantes;
     let handleInterval;

    const contador = () => {
      const min = Math.floor( segundosRestantes/ 60 );
      const  seg = segundosRestantes - (min * 60);
    
      setMinutos(min);
      setSegundos(seg);
      
    
      if ( seg < 10 ){
        setSegundos('0' + seg );
      }

      if( min < 10 ){
        setMinutos('0' + min ); 
      } 
    
      if( min === 0 & seg === 0){
        clearInterval(handleInterval);
      }
    
      segundosRestantes--
    
    }

    const cuentaRegresiva = () => {
      handleInterval =  setInterval(contador, 1000 );
      let tiempo = minutos;
      segundosRestantes = tiempo * 60;

    }


















     return (

              <>      
            
                <div className="cajita">
                    
                    <h1>Temporizador</h1>
                    <h3>Ingrese su tiempo: </h3>
                      
                      <input 
                      className="input"
                      type="number" 
                      autoComplete="off"
                      placeholder="Ingrese sus minutos"
                      minutos={minutos}
                      onChange={Handleminutos}
                      />

                      
                  
                  <Reloj
                  
                  minutos = {minutos}
                  segundos = {segundos}
                  
                  />

                      <button
                      className="boton"
                      onClick={cuentaRegresiva}
                      
                      
                     
                      >
                        Comenzar
                      
                      </button>
                   
                </div> 
              
                <Footer/>
             
             </>
            );

}

export default TimeInput;