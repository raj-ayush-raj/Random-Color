const getcolor = () =>{
    const randomNum = Math.floor(Math.random()*16777215);
    const randomCode = `#${randomNum.toString(16)}`
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-name").innerText= randomCode;
    // navigator.clipboard.writeText(randomCode);
    // console.log(randomNum, randomCode);
}


document.getElementById("btn").addEventListener("click", getcolor)

getcolor();