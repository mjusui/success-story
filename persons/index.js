'use strict';

const rnorm=require('util/rnorm/gift');
const seq=require('util/seq');


const person=()=>{
  const gift=rnorm();
  const score=10;
  return { gift, score, };
};


const persons=(cnt)=>{
  return seq(cnt).map(
    num => person() );  
};


module.exports=persons;
