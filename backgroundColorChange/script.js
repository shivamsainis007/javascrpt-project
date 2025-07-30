//randam color genrater

function randomColor(){
  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  console.log('hello')
  console.log(color)
  return color;
}
let interval;

function startchangeColor(){
  const chnaging=function(){
    document.body.style.backgroundColor=randomColor()
  }
  if(!interval){
    interval=setInterval(chnaging,1000)
  }
}

function stopChangeColor(){
  clearInterval(interval)
  interval=null
}

document.querySelector('#start').addEventListener('click',startchangeColor)

document.querySelector('#stop').addEventListener('click',stopChangeColor)