import entBase from "../../base/abstract/entBase";


class entPergunta extends entBase {
    
    constructor(private pergunta: string){
        super();
        this.validar();
        this.pergunta = pergunta;
    }

    validar() {
        if(!this.pergunta || this.pergunta.length < 5){
            throw new Error("Valores invalidos para pergunta");
        }
    }

    getId(): string {
        return this.id; 
    }

    // setId(id: string):void{
    //     this.id = id;
    // }

    getPergunta(){
         return this.pergunta;
    }

    // setPergunta(pergunta: string):void{
    //     this.pergunta = pergunta;
    // }
    
}

export default entPergunta;