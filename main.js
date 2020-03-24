// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const replaceBase =(x, y, tempIdx) => {
  if(x[tempIdx] != y){
    let temp =x[tempIdx];
    x[tempIdx]=y;
    y=temp;
    console.log(x[tempIdx]+y);
    return true;
  }
  else return false;
}

const pAequorFactory = (specimenNum, dna) =>{
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate(){
      const tempIdx = Math.floor(Math.random()*15);
       if(!replaceBase(dna, returnRandBase(),tempIdx)){
         this.mutate();
       }
    },
    
    compareDNA(pAequorToCompare){
      let counter=0;
      for(let i=0; i<this.dna.length; i++)
        {      if(this.dna[i]===pAequorToCompare.dna[i]){
            counter++;
          }      
        }

          let similarity = counter/this.dna.length*100;
          console.log(`specimen #${this.specimenNum} and specimen #${pAequorToCompare.specimenNum} have ${similarity.toFixed(2)}% DNA in common.`);
    },
    
    willLikelySurvive(){
      baseCounter=0;
      this.dna.forEach(base => {
        if(base==='C' || base==='G'){
          baseCounter++;
        }});
        if(baseCounter/this.dna.length >= 0.6){
          return true;
        } else {
          return false;
        }
      }
    }
  }


let instances = [];
  for(let i=0; i<30; i++){
    instances[i]=pAequorFactory(i+1, mockUpStrand());
  }

console.log(instances);



