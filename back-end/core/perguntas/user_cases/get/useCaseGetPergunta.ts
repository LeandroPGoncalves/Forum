import { injectable, inject } from "inversify";
import { intRepositorioPergunta } from "../../repositorio/intRepositorioPergunta";
import 'reflect-metadata';


@injectable()
export class useCaseGetPergunta {
    constructor(@inject("repositorioPergunta") private repositorio: intRepositorioPergunta){
    
    }

    // dtoOut(){
        
    // }


    executar(){
        return this.repositorio.get();
    }

}