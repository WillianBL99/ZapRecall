export default class Decks {

    constructor(){
        this.decks = {
            JSX: [
                {n: 1, q: 'O que é JSX?', a: 'Uma extensão de linguagem do JavaScript' },
                {n: 2, q: 'O React é __', a: 'uma biblioteca JavaScript para construção de interfaces' },
                {n: 3, q: 'Componentes devem iniciar com __ ', a: 'letra maiúscula' }/* ,
                {n: 4, q: 'Podemos colocar __ dentro do JSX', a: 'expressões' },
                {n: 5, q: 'O ReactDOM nos ajuda __', a: 'interagindo com a DOM para colocar componentes React na mesma' },
                {n: 6, q: 'Usamos o npm para __', a: 'gerenciar os pacotes necessários e suas dependências' },
                {n: 7, q: 'Usamos props para __', a: 'passar diferentes informações para componentes ' },
                {n: 8, q: 'Usamos estado (state) para __', a: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' } */
        
            ],
            Outro_JSX: [
                {n: 1, q: 'O que é JSX?', a: 'Uma extensão de linguagem do JavaScript' },
                {n: 2, q: 'O React é __', a: 'uma biblioteca JavaScript para construção de interfaces' },
                {n: 3, q: 'Componentes devem iniciar com __ ', a: 'letra maiúscula' }/* ,
                {n: 4, q: 'Podemos colocar __ dentro do JSX', a: 'expressões' },
                {n: 5, q: 'O ReactDOM nos ajuda __', a: 'interagindo com a DOM para colocar componentes React na mesma' },
                {n: 6, q: 'Usamos o npm para __', a: 'gerenciar os pacotes necessários e suas dependências' },
                {n: 7, q: 'Usamos props para __', a: 'passar diferentes informações para componentes ' },
                {n: 8, q: 'Usamos estado (state) para __', a: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' } */
        
            ]
        };
    }

    get decksName(){
        const names = [];
        for(const deck in this.decks) names.push(deck);
        return names;
    }

    shuffleDeck(dackName){
        return shuffleObject(this.decks[dackName]);
    }

    
}

// Embaralhar array
function shuffleObject(obj) {
    for (let i = obj.length - 1; i > 0; i--) {
        // gera índices aleatórios dentro do permitido para o 'obj'
        const j = (Math.floor((Math.random() * 10)%obj.length));

        const aux = obj[i];
        obj[i] = obj[j];
        obj[j] = aux;
    }
    return obj;
}