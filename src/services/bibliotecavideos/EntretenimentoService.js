class EntretenimentoService{

    getAll(){
        const entretenimento = localStorage.getItem("entretenimento")
        return entretenimento ? JSON.parse(entretenimento) : []
    }

    get(id){
        const entretenimento = this.getAll()
        return entretenimento[id]
    }

    create(dados){

        const entretenimento = this.getAll()
        entretenimento.push(dados)
        localStorage.setItem("entretenimento", JSON.stringify(entretenimento))
    }

    update(id, dados){
        const entretenimento = this.getAll()
        entretenimento.splice(id,1,dados)
        localStorage.setItem("entretenimento", JSON.stringify(entretenimento))
    }

    delete(id){
        const entretenimento = this.getAll()
        entretenimento.splice(id,1)
        localStorage.setItem("entretenimento", JSON.stringify(entretenimento))
    }
}

export default new EntretenimentoService()