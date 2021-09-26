//Regras de negócio do cadastro 

import {Request, Response} from 'express';

export default {
    //método de criar
    async create(req: Request, res: Response) {
        const { nome, cpf } = req.body; //requisicição feita pelo body api sendo desestruturada
       
        const  data  = {nome, cpf}; //criou um objeto data, com base na desestruturação da requisição do body
       
        return res.status(201).json({ data: data}); //resposta vem em formato json com statuso de ok
    },
    //método de listar
    async list(req: Request, res: Response) {
        const result = null;

        return res.status(200).json({ data: result}); //retornando os valores do vetor result como objeto json ao fazer um get
    },
    //método find by id passado por parametro
    async find(req: Request, res: Response){
        const { id } = req.params;
        const cadastro = null;
        return res.status(200).json(cadastro);
    },
    //método de atualizar
    async update(req:Request, res: Response) {
        const { nome, cpf } = req.body; //recebendo pelo body

        const { id } = req.params;

        const data = {cpf, nome};

        const cadastro = null;

        return res.status(200).json({ data:cadastro }); //retorna o cadastro atualizado

    },

    //método deletar usuário
    async delete(req: Request, res:Response){
        const { id } = req.params;

        return res.status(200).json({ message: 'Registro excluído com sucesso!'});
        
    }
}