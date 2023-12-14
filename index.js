class heroi{
    constructor(tipo,ataque)
      {this.tipo= tipo
      this.ataque= ataque
  }
  escrever(){
    console.log (`o ${this.tipo} atacou usando ${this.ataque}`)
  }
  }
  let mago = new heroi("mago", "magia")
  let guerreiro = new heroi("guerreiro", "espada")
  let monge = new heroi("monge", "artes marciais")
  let ninja = new heroi("ninja", "shuriken")

mago.escrever() 
guerreiro.escrever()
monge.escrever() 
ninja.escrever()