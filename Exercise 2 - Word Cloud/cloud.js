console.log("Exercise 2 - Word Cloud");

let myParagraph = document.querySelector("#myParagraph")
let paraText = myParagrapharagraph.textContent.toLowerCase().split(" ")
let Object = {}
let cloud = document.getElementById("myWordCloud")


for(let i = 0; i < paraText.length; i++){
    if(Object.hasOwnProperty(paraText[i])){
        paraObject[paraText[i]]++
    }
    else{
        Object[paraText[i]] = 1
    }
}

let sortedPara = Object.fromEntries(Object.entries(paraObject).sort(([,a], [,b]) => b - a))
let twelveCommon = Object.keys(Object.fromEntries(Object.entries(sortedPara).slice(1,13)))



