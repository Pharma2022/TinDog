import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])


const render= (html)=> document.getElementById('card').innerHTML = html

const swipe = (bool,id)=>{
    
    currentDog.setMatchStatus(bool)
    document.getElementById(id).classList.toggle("hide")
    
    setTimeout(()=>{
        document.getElementById(id).classList.toggle("hide")    
        currentDog = new Dog(dogsData[ currentDogIndex < dogsData.length-1? currentDogIndex+=1: currentDogIndex=0])
        
   render(currentDog.getDogHtml()) 
   },1500)
    
}          
          
          
render(currentDog.getDogHtml() )

document.getElementById("accept-button").addEventListener('click', ()=> swipe(  true,"like")   )
document.getElementById("reject-button").addEventListener('click', ()=> swipe(  false,"nope")  )