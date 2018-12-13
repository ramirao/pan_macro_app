import React from 'react';
import Typography from '@material-ui/core/Typography';
import Topicos from './Topicos';
import AutoPlaySwipeableViews from './Carousel';

export const graficos = (props) => {
 let topicoDefinido = Object.keys(props.topico).map(
   topKey => {
     return [...Array(props.topico[topKey])].map ((_, i)=>{
      return <Topicos key={topKey +1} type={topKey} />
     });
   })
   .reduce((arr,el) =>{
     return arr.concat(el)
   }, []);
   if (topicoDefinido.length===0) {
     topicoDefinido=<AutoPlaySwipeableViews/>
   }


    return (
      <div>
      <Typography component="div" >
        {topicoDefinido}
      </Typography>
    </div>
    ) 
    
};

export default graficos;
  