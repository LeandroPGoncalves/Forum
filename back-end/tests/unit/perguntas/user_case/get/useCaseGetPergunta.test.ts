// docker exec -it --user=root forum_node npm t tests/unit/perguntas/user_case/get/useCaseGetPergunta

import {useCaseGetPergunta} from '../../../../../core/perguntas/user_cases/get/useCaseGetPergunta'
import { intRepositorioPergunta } from '../../../../../core/perguntas/repositorio/intRepositorioPergunta';
import {container} from '../../../../../core/container/container'

describe("useCaseGetPergunta", () => { 
    it("deve retornar o DTO de saida pelo use case", () => {
        // Resolve useCasePergunta from the container
        const useCase = container.get<useCaseGetPergunta>(useCaseGetPergunta);

        // Mock your repository
        const mockRepositorio: intRepositorioPergunta = {
            get: jest.fn().mockReturnValue('uma string qualquer')
        };

        // Spy on the repository's get method
        jest.spyOn(mockRepositorio, 'get');

        // Set the repository property of the use case
        useCase['repositorio'] = mockRepositorio;

        const result = useCase.executar();

        const retornoPergunta = 'uma string qualquer';

        expect(mockRepositorio.get).toHaveBeenCalled();
        expect(result).toEqual(retornoPergunta);
    });
})
