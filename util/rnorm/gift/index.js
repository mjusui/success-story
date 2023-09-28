'use strict';

const rnorm=require('util/rnorm');

const handle=()=>{
  return 50 + (rnorm() * 10);
};


module.exports=handle;
