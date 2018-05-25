class NegociacaoController {

    constructor() {
        
        let $ = document.querySelector.bind(document);
        
        this._data = $("#data");
        this._quantidade = $("#quantidade");
        this._valor = $("#valor");

    }
    
    adiciona(event) {
        
        event.preventDefault();

        let dataConvertida = new Date(this._data.value.split("-"));       

        let negociacao = new Negociacao(
            dataConvertida,
            this._quantidade.value,
            this._valor.value
        );

        console.log(negociacao);        

    }

}