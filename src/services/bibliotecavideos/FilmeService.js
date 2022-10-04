class FilmeService{

    getAll(){
        const filme = localStorage.getItem("filme")
        return filme ? JSON.parse(filme) : []
    }

    get(id){
        const filme = this.getAll()
        return filme[id]
    }

    create(dados){

        const filme = this.getAll()
        filme.push(dados)
        localStorage.setItem("filme", JSON.stringify(filme))
    }

    update(id, dados){
        const filme = this.getAll()
        filme.splice(id,1,dados)
        localStorage.setItem("filme", JSON.stringify(filme))
    }

    delete(id){
        const filme = this.getAll()
        filme.splice(id,1)
        localStorage.setItem("filme", JSON.stringify(filme))
    }
}

export default new FilmeService() 