import { Container } from 'inversify';
import { useCaseGetPergunta} from '../perguntas/user_cases/get/useCaseGetPergunta';
import { intRepositorioPergunta } from '../perguntas/repositorio/intRepositorioPergunta';
import { repositorioPergunta } from '../infra/repositorio/repositorioPergunta';

const container = new Container();

container.bind<useCaseGetPergunta>(useCaseGetPergunta).toSelf();
container.bind<intRepositorioPergunta>("repositorioPergunta").to(repositorioPergunta);

export {container};