import React  from 'react';
import '../style.css';



export const Reloj = (props) => {
    
   const {minutos, segundos } = props;
    
   
    return (
        
        <div className="reloj">
            <h1>
                
                {minutos}:{segundos} 
            
            </h1>

            
        </div>

          
       
    )
}
