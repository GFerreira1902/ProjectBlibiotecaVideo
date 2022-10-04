class LancamentoService{

    getAll(){
        const lancamento = localStorage.getItem("lancamento")
        return lancamento ? JSON.parse(lancamento) : []
    }

    get(id){
        const lancamento = this.getAll()
        return lancamento[id]
    }

    create(dadoslancamento){

        const lancamento = this.getAll()
        lancamento.push(dadoslancamento)
        localStorage.setItem("lancamento", JSON.stringify(lancamento))
    }

    update(id, dadoslancamento){
        const lancamento = this.getAll()
        lancamento.splice(id,1,dadoslancamento)
        localStorage.setItem("lancamento", JSON.stringify(lancamento))
    }

    delete(id){
        const lancamento = this.getAll()
        lancamento.splice(id,1)
        localStorage.setItem("lancamento", JSON.stringify(lancamento))
    }
}

export default new LancamentoService()