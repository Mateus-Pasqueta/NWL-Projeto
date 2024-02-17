const perguntas = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: ["var", "int", "string"],
        correta: 0
    },
    {
        pergunta: "Qual desses não é um tipo de dado em JavaScript?",
        respostas: ["Number", "Boolean", "Character"],
        correta: 2
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: ["==", "===", "!="],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: ["console.log()", "print()", "log()"],
        correta: 0
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: ["function minhaFuncao()", "def minhaFuncao()", "void minhaFuncao()"],
        correta: 0
    },
    {
        pergunta: "Qual é o símbolo para comentários de linha única em JavaScript?",
        respostas: ["//", "/*", "<!--"],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de adição em JavaScript?",
        respostas: ["+", "&", "="],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: ["pop()", "remove()", "deleteLast()"],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
        respostas: ["Adiciona um evento a um elemento", "Remove um evento de um elemento", "Altera um evento de um elemento"],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
        respostas: ["105", "15", "Error"],
        correta: 0
    },
];
const quiz = document.querySelector('#quiz')

const template = document.querySelector('template')


// loop 
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)

    }

    quizItem.querySelector('dl dt').remove()


    // coloca as perguntas na tela
    quiz.appendChild(quizItem)
}
