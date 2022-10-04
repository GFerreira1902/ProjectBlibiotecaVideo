class SuporteService{

    getAll(){
        const suporte = localStorage.getItem("suporte")
        return suporte ? JSON.parse(suporte) : []
    }

    get(id){
        const suporte = this.getAll()
        return suporte[id]
    }

    create(dadossuporte){

        const suporte = this.getAll()
        suporte.push(dadossuporte)
        localStorage.setItem("suporte", JSON.stringify(suporte))
    }

    update(id, dadossuporte){
        const suportes = this.getAll()
        suportes.splice(id,1,dadossuporte)
        localStorage.setItem("suportes", JSON.stringify(suportes))
    }

    delete(id){
        const suportes = this.getAll()
        suportes.splice(id,1)
        localStorage.setItem("suportes", JSON.stringify(suportes))
    }
}

export default new SuporteService()