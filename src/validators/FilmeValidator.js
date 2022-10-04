const FilmeValidator = {
    video: {
        required: "O campo Video é Obrigatório",
        minLength: {
            value: 1,
            message: "Número mínimo de caracteres não atingido"
        },
        maxLength: {
            value: 200,
            message: "Número máximo de caracteres atingido"
        },
        min: {
            value: 10,
            message: "O valor mínimo é 2"
        },
    },
    thumb: {
        required: "O campo Thumbnail é Obrigatório",
        minLength: {
            value: 1,
            message: "Número mínimo de caracteres não atingido"
        },
        maxLength: {
            value: 200,
            message: "Número máximo de caracteres atingido"
        },
        min: {
            value: 10,
            message: "O valor mínimo é 2"
        },
    },
    nome: {
        required: "O campo Nome é Obrigatório",
        minLength: {
            value: 3,
            message: "Número mínima de caracteres não atingido"
        },
        maxLength: {
            value: 50,
            message: "Número máximo de caracteres atingido"
        },
        min: {
            value: 2,
            message: "O valor mínimo é 2"
        },
    },
}

export default FilmeValidator