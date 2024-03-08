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
  let count = 0;
  let password = ""
  
  while(count < length){
    password += capitalLetter.charAt(Math.floor(Math.random()*capitalLetter.length))
    password+=smallLetter.charAt(Math.floor(Math.random()*smallLetter.length))
    password += numbers.charAt(Math.floor(Math.random()*numbers.length))
    password += characters.charAt(Math.floor(Math.random()*characters.length))
    count++;
  }
    return password;
}


const alphaNumeric = async(request)=>{
  const {length} = request
  let pattern = /[0-9]{1,}/

  if(!pattern.test(length)){
    throw new LengthException("Lenght must contain number from 0-9 or more");
  }
  let count = 0
  let password = ""
  while(count < length){
    password += capitalLetter.charAt(Math.floor(Math.random()*capitalLetter.length))
    password+=smallLetter.charAt(Math.floor(Math.random()*smallLetter.length))
    password += numbers.charAt(Math.floor(Math.random()*numbers.length))
    count++;
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
  let count = 0
   while(count < length){
    password += capitalLetter.charAt(Math.floor(Math.random()*capitalLetter.length))
    password+=smallLetter.charAt(Math.floor(Math.random()*smallLetter.length))
    count++;
  }
    return password;

}
const numeric = async(request)=>{
  const {length} = request
  let pattern = /[0-9]{1,}/

  if(!pattern.test(length)){
    throw new LengthException("Lenght must contain number from 0-9 or more");
  }
  let count = 0;
  let password = ""
  while(count < length){
    password += numbers.charAt(Math.floor(Math.random()*numbers.length))
    count++;
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
  let count = 0;
  while(count < length){
    password += capitalLetter.charAt(Math.floor(Math.random()*capitalLetter.length))
    password+=smallLetter.charAt(Math.floor(Math.random()*smallLetter.length))
    password += characters.charAt(Math.floor(Math.random()*characters.length))
    count++;
  }
    return password;

}

const numericSymbol = async(request) =>{
  const {length} = request
  let pattern = /[0-9]{1,}/

  if(!pattern.test(length)){
    throw new LengthException("Lenght must contain number from 0-9 or more");
  }
  let password = ""
  let count = 0;
  while(count < length){
    password+=numbers.charAt(Math.floor(Math.random()*smallLetter.length))
    password += characters.charAt(Math.floor(Math.random()*characters.length))
    count++;
  }
  return password

}

module.exports = {allCharacter,alphaNumeric,alphabeth,numeric,alphaSymbol,numericSymbol}