console.log("Exercise 2 - Word Cloud");

let paragraph = document.querySelector("#myParagraph")
let paraText = paragraph.textContent.toLowerCase().split(" ")
let paraObject = {}
let cloud = document.getElementById("myWordCloud")


for(let i = 0; i < paraText.length; i++){
    if(paraObject.hasOwnProperty(paraText[i])){
        paraObject[paraText[i]]++
    }
    else{
        paraObject[paraText[i]] = 1
    }
}

let sortedPara = Object.fromEntries(Object.entries(paraObject).sort(([,a], [,b]) => b - a))
let twelveCommon = Object.keys(Object.fromEntries(Object.entries(sortedPara).slice(1,13)))



let one = document.createElement("p")
one.setAttribute("class", "one")
one.textContent = twelveCommon[0]
cloud.append(one)



let two = document.createElement("p")
two.setAttribute("class", "two")
two.textContent = twelveCommon[1]
cloud.append(two)


let three = document.createElement("p")
three.setAttribute("class", "three")
three.textContent = twelveCommon[2]
cloud.append(three)



let four = document.createElement("p")
four.setAttribute("class", "four")
four.textContent = twelveCommon[3]
cloud.append(four)



   

let five = document.createElement("p")
five.setAttribute("class", "five")
five.textContent = twelveCommon[4]
cloud.append(five)



   

let six = document.createElement("p")
six.setAttribute("class", "six")
six.textContent = twelveCommon[5]
cloud.append(six)



   

let seven = document.createElement("p")
seven.setAttribute("class", "seven")
seven.textContent = twelveCommon[6]
cloud.append(seven)



   

let eight = document.createElement("p")
eight.setAttribute("class", "eight")
eight.textContent = twelveCommon[7]
cloud.append(eight)



   

let nine = document.createElement("p")
nine.setAttribute("class", "nine")
nine.textContent = twelveCommon[8]
cloud.append(nine)



   

let ten = document.createElement("p")
ten.setAttribute("class", "ten")
ten.textContent = twelveCommon[9]
cloud.append(ten)



   

let eleven = document.createElement("p")
eleven.setAttribute("class", "eleven")
eleven.textContent = twelveCommon[10]
cloud.append(eleven)



   

let twelve = document.createElement("p")
twelve.setAttribute("class", "twelve")
twelve.textContent = twelveCommon[11]
cloud.append(twelve)
