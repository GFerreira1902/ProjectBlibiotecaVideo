class JogosService{

    getAll(){
        const jogos = localStorage.getItem("jogos")
        return jogos ? JSON.parse(jogos) : []
    }

    get(id){
        const jogos = this.getAll()
        return jogos[id]
    }

    create(dados){

        const jogos = this.getAll()
        jogos.push(dados)
        localStorage.setItem("jogos", JSON.stringify(jogos))
    }

    update(id, dados){
        const jogos = this.getAll()
        jogos.splice(id,1,dados)
        localStorage.setItem("jogos", JSON.stringify(jogos))
    }

    delete(id){
        const jogos = this.getAll()
        jogos.splice(id,1)
        localStorage.setItem("jogos", JSON.stringify(jogos))
    }
}

export default new JogosService()