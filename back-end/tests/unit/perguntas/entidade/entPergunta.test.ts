import entPergunta from"../../../../core/perguntas/entidade/entPergunta";

describe("entEntidade", () => {
    it('deve intanciar a entidade', async () => {
        let pergunta = new entPergunta("Uma pergunta qualquer?");

        const uuidv4Pattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    
        const id = pergunta.getId();

        expect(pergunta).toBeInstanceOf(entPergunta);
        expect(uuidv4Pattern.test(id)).toBe(true);
        expect(pergunta.getPergunta()).toEqual("Uma pergunta qualquer?");
    }),
    it('deve retornar a mesnagem de erro da pergunta', async () => {
        let eMsg: string = "";

        try{
        let pergunta = new entPergunta("dois");
        } catch (error: any) {
          eMsg = error.message;
        }
        expect(eMsg).toEqual("Valores invalidos para pergunta")
    })
    
})
