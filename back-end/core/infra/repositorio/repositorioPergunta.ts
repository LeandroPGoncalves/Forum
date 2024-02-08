import { intRepositorioPergunta } from "../../perguntas/repositorio/intRepositorioPergunta";
import { injectable } from 'inversify';

@injectable()
export class repositorioPergunta implements intRepositorioPergunta{

    get(): string {
        return "Hello World";
    }

}