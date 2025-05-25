const hrEle = document.querySelector(".hr")
const minEle = document.querySelector(".min")
const secEle = document.querySelector(".sec")

setInterval(() => {
    let date = new Date()

    let hr = date.getHours() * 30; 
    let min = date.getMinutes() * 6; 
    let sec = date.getSeconds() * 6;


    hrEle.style.transform = `rotate(${hr + min / 12}deg)`
    minEle.style.transform = `rotate(${min + sec / 60}deg)` 
    secEle.style.transform = `rotate(${sec}deg)`
},1000)

