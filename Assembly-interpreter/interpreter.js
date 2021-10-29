 //split
 function split(str,delimiter){
 let arr = [];
  let temp = " ";
  for(let i = 0; i < str.length; i++){
    if( str[i] !== delimiter ){
      temp += str[i];
    }else if( str[i] === delimiter ){
      arr.push(temp);
      temp = " ";
      
    }

    
  }
  arr.push(temp);
  return arr;
}


function interpret(program){
  program = ["mov a 1", "mov b a", "dec b"];
  let result = {};
  
   for(let i = 0; i < program.length; i++){
    let parts = split(program[i], " ");
    let firstThreeLetters = parts[0];
    let reg = parts[1];
    let value = parts[2];
    if(firstThreeLetters === "mov"){
      result[reg] = Number(value);
    }else if(firstThreeLetters === "inc"){
      result[reg]++;
    }else if(firstThreeLetters === "dec"){
      result[reg]--;
    }else if(firstThreeLetters === "jnz"){
      if(result[reg] !== 0){
        i += value - 1;
      }
    }
   }
   return result;
}
console.log(interpret());

