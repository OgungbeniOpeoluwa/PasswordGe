

const result = document.querySelector(".clicks")
const parent = document.querySelectorAll("#UpperCaseAlphabeth")
console.log(result)
console.log(parent)
const inputs = document.querySelector('#inputsText')
let results = ""

const view = document.querySelector(".view")


result.addEventListener("click",(e)=>{
    e.preventDefault();
    
    for (const key of parent) {
        if(key.checked == true){
            results +=key.className
            console.log(results)
        }
    }
     const length = {length:inputs.value}

    if(results == "alphanumeric"){
        const url = "http://localhost:5050/alphaNumeric"
        sendData(length,url)
        results =""
    } else if(results == "numeric"){
        const url = "http://localhost:5050/numeric"
        sendData(length,url)
        results=""
    }else if(results == "alphanumericsymbols"){
        const url = "http://localhost:5050/allCharacters"
        sendData(length,url)
        results=""
    }else if(results == "numericsymbols"){
        const url = "http://localhost:5050/alphaNumeric"
        sendData(length,url)
        results=""
    }else if(results == "alphasymbols"){
        const url = "http://localhost:5050/alphaSymbol"
       sendData(length,url)
       results=""
    }else{
        const url = "http://localhost:5050/alphabeth"
        sendData(length,url)
    results=""}


})



const sendData = async(data,url)=>{
    try {
        const response = await fetch (url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }, 
          body: JSON.stringify(data),
        }) 
        let result = await response.json();
        view.textContent = result.res;

      } catch (error) {
        view.innerHTML = error;
      }
    };








function copy() {
    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(view.innerHTML);
    
    // Alert the copied text
    alert("Copied the text: " + view.innerHTML);
  }
    
   