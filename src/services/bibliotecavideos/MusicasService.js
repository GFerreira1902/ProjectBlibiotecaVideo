class MusicasService{

    getAll(){
        const musicas = localStorage.getItem("musicas")
        return musicas ? JSON.parse(musicas) : []
    }

    get(id){
        const musicas = this.getAll()
        return musicas[id]
    }

    create(dados){

        const musicas = this.getAll()
        musicas.push(dados)
        localStorage.setItem("musicas", JSON.stringify(musicas))
    }

    update(id, dados){
        const musicas = this.getAll()
        musicas.splice(id,1,dados)
        localStorage.setItem("musicas", JSON.stringify(musicas))
    }

    delete(id){
        const musicas = this.getAll()
        musicas.splice(id,1)
        localStorage.setItem("musicas", JSON.stringify(musicas))
    }
}

export default new MusicasService()