'use strict';

const players=require('players');
const happen=require('happen');
const evaluate=require('evaluate');

const handle=(players)=>{
  const max=80;
  for(let i=0; i < max; i++){
    players.forEach(happen);
  }
  evaluate(players);

};
handle(players(1000) );
