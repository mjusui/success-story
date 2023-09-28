'use strict';

const pi=Math.PI;

const handle=()=>{
  /* Box-Muller */
  const x=(1 - Math.random() );
  const y=(1 - Math.random() );

  const log_x=Math.log(x);

  return Math.sqrt(-2 * log_x)
    * Math.cos(2 * pi * y) ;
    
};


module.exports=handle;
