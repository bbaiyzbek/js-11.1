const input = document.querySelector('#input')
const btnStart = document.querySelector('#btn')
const res = document.querySelector('#res')

const getRandomInt = () =>{
    res.innerHTML = ' '
    const number = Math.floor(Math.random() * 10);
    if (+input.value === number){
        return res.innerHTML = `YOU WIN! :)`
    }else{
        return res.innerHTML = `(${number})  try again :( `
    }
}
btnStart.addEventListener('click', getRandomInt)

