'use strict';



const evalPaleto=(descs)=>{
  const prefix='Paleto: ';

  const tot=descs.reduce(
    (tot, player)=>(tot + player.score), 0);
  const tot80=(tot * 8 / 10);

  console.log(prefix, `total score  is ${tot}`);
  console.log(prefix, `80% of score is ${tot80}`);

  let sum=0;
  let cnt=0;
  for(let idx=0; idx < descs.length; idx++){
    const player=descs[idx];
    sum+=player.score;

    if(sum < tot80){
      continue;
    }
    cnt=(idx + 1);
    break;
  }
  console.log(prefix, `${cnt} / ${descs.length} holds 80% of score`);

};

const evaluate=(players)=>{
  const descs=players.sort(
    (a, b)=>(b.score - a.score)
  );

  const json=JSON.stringify(descs, null, 2);
  console.log(json);

  evalPaleto(descs);
};


module.exports=evaluate;
