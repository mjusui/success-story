'use strict';
const assert=require('assert').strict;

const SeqError=class SeqError extends Error {
  constructor(msg, code){
    super(msg);
    this.code=`util/seq/${code}`;
  }
}

const seq=(arg1, arg2)=>{
  let items=[];

  if(typeof arg1 === 'function'
  && typeof arg2 === 'number' ){
    const hndl=arg1;
    const num=arg2;
    for(let i=0; i < num; i++){
      items[i]=hndl(i);
    }
    return items;
  }
  if(typeof arg1 === 'number'){
    const num=arg1; 
    for(let i=0; i < num; i++){
      items[i]=i;
    }
    return items;
  };
  throw new SeqError(
    'invalid args',
    'invalid-args' );
};



test: {
  const nums=seq(30);    
  for(let i=0; i < nums.length; i++){
    assert(nums[i] === i,
      `util/seq: gen error` );
  }

  const nums2=seq(n => n*2, 10);
  for(let i=0; i < nums2.length; i++){
    assert(nums2[i] === i*2,
      `util/seq: gen error` );
  }

  try {
    seq();
    assert(false, 'util/seq: throw error');
  }catch(err){
    assert(err.code === 'util/seq/invalid-args',
      'util/seq: invalid error');
  }
} // test



module.exports=seq;
