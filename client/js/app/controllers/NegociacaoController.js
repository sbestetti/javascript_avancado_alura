class NegociacaoController {

    constructor() {
        
        let $ = document.querySelector.bind(document);
        
        this._data = $("#data");
        this._quantidade = $("#quantidade");
        this._valor = $("#valor");

    }
    
    adiciona(event) {
        
        event.preventDefault();

        let negociacao = new Negociacao(
            this._data,
            this._quantidade,
            this._valor
        );

        console.log(negociacao);
        
        

    }

}