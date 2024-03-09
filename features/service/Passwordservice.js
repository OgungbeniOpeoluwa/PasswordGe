const LengthException = require('../exception/LengthException')

const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetter = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const characters = "@#%^&*()!_-+:;'.,<>?/\\}{][~`=$\""

const allCharacter = async(request)=>{
  const {length} = request
  let pattern = /[0-9]{1,}/

  if(!pattern.test(length)){
    throw new LengthException("Lenght must contain number from 1-9 or more");
  }
  
  let password = ""
  
  while(password.length < length){
    password += capitalLetter.charAt(Math.floor(Math.random()*capitalLetter.length))
    password += smallLetter.charAt(Math.floor(Math.random()*smallLetter.length))
    password += numbers.charAt(Math.floor(Math.random()*numbers.length))
    password += characters.charAt(Math.floor(Math.random()*characters.length))
  }
 
  if(password.length > length){
    let reduce = password.slice(0,length)
    password = reduce;
  }
   
  return password;
}


const alphaNumeric = async(request)=>{
  const {length} = request
  let pattern = /[0-9]{1,}/

  if(!pattern.test(length)){
    throw new LengthException("Lenght must contain number from 0-9 or more");
  }
  let password = ""
 
  while(password.length <= length){
    password += capitalLetter.charAt(Math.floor(Math.random()*capitalLetter.length))
    password+=smallLetter.charAt(Math.floor(Math.random()*smallLetter.length))
    password += numbers.charAt(Math.floor(Math.random()*numbers.length))
  }
  
  if(password.length > length){
    let reduce = password.slice(0,length)
    password = reduce;
  }
    return password;

}


const alphabeth = async(request)=>{
  const {length} = request
  let pattern = /[0-9]{1,}/

  if(!pattern.test(length)){
    throw new LengthException("Lenght must contain number from 0-9 or more");
  }
  let password = ""
  
  while(password.length < length){
    password += capitalLetter.charAt(Math.floor(Math.random()*capitalLetter.length))
    password+=smallLetter.charAt(Math.floor(Math.random()*smallLetter.length))
  }
  
  if(password.length > length){
    let reduce = password.slice(0,length)
    password = reduce;
  }
    
  return password;

}
const numeric = async(request)=>{
  const {length} = request
  let pattern = /[0-9]{1,}/

  if(!pattern.test(length)){
    throw new LengthException("Lenght must contain number from 0-9 or more");
  }
  let password = ""
  
  while(password.length < length){
    password += numbers.charAt(Math.floor(Math.random()*numbers.length))
  }

  if(password.length > length){
    let reduce = password.slice(0,length)
    password = reduce;
  }
   
  return password;
}

const alphaSymbol = async(request)=>{
  const {length} = request
  let pattern = /[0-9]{1,}/

  if(!pattern.test(length)){
    throw new LengthException("Lenght must contain number from 0-9 or more");
  }
  let password = ""
  
  while(password.length < length){
    password += capitalLetter.charAt(Math.floor(Math.random()*capitalLetter.length))
    password+=smallLetter.charAt(Math.floor(Math.random()*smallLetter.length))
    password += characters.charAt(Math.floor(Math.random()*characters.length))
  }

  if(password.length > length){
    let reduce = password.slice(0,length)
    password = reduce;
  }
    
  return password;

}

const numericSymbol = async(request) =>{
  const {length} = request
  let pattern = /[0-9]{1,}/

  if(!pattern.test(length)){
    throw new LengthException("Lenght must contain number from 0-9 or more");
  }
  
  let password=""
 
  while(password.length < length){
    password +=numbers.charAt(Math.floor(Math.random()*smallLetter.length))
    password += characters.charAt(Math.floor(Math.random()*characters.length))
  }
  console.log(password)
 
  if(password.length > length){
    let reduce = password.slice(0,length)
    password = reduce;
  }
  
  return password

}


module.exports = {allCharacter,alphaNumeric,alphabeth,numeric,alphaSymbol,numericSymbol}