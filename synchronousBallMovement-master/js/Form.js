class Form{
    constructor(){
        this.input = createInput("name:")
        this.title = createElement('h2')
        this.button = createButton('play')
        this.greeting = createElement('h3')
    }
    hide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
    }
display(){
    
    this.title.html("car racing game")
    this.title.position(250,30)
    this.input.position(300,100)
    this.button.position(300,200)
    

    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playerCount+=1
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("hello "+player.name)
        this.greeting.position(250,250)
    })
}


}