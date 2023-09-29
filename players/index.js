'use strict';

const rnorm=require('util/rnorm/gift');
const seq=require('util/seq');


const player=()=>{
  const gift=rnorm();
  const score=10;
  return { gift, score, };
};


const players=(cnt)=>{
  return seq(cnt).map(
    num => player() );  
};


module.exports=players;
