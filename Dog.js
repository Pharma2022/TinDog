export default class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
  
       getDogHtml = ()=> 
     
          `<div class="dog-img" style="background-image: url('${this.avatar}')">
                   <h4 id="like" class="hide">LIKE</h4>
                   <h4 id = "nope" class="hide">NOPE</h4>
                 <h4 class="dog-info"> ${this.name}, ${this.age} </h4>
                 <h4 class="dog-bio">        ${this.bio}</h4> 
                 
            </div>`
  
            
            
    
    
}
