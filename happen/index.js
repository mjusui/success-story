'use strict';

const { random,
  ceil, floor, }=Math;
const rand=random;

const up=(person)=>{
  const border=(rand() * 100);

  if(person.gift < border){
    return;
  }
  const up=(person.up || 0);
  person.up=(up + 1);

  const score=(person.score * 2);
  person.score=score;
};
const down=(person)=>{
  const down=(person.down || 0);
  person.down=(down + 1);

  const score=(person.score / 2);
  person.score=score;
};
const stay=(person)=>{
  const stay=(person.stay || 0);
  person.stay=(stay + 1);

  return;
};

const happen=(person)=>{
  const luck=floor(rand() * 2000);

  if(luck < 500){
    up(person);
    return;
  }
  if(luck < 1000){
    down(person);
    return;
  }
  stay(person);
};


module.exports=happen;
