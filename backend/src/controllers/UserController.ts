import { Request,Response } from 'express';
import EmailService from '../services/EmailService';

const user = [{
    name: 'Renan',
    email: 'renan.cav.ti@gmail.com'
}];

export default {
    async index(req: Request, res: Response) {
        return res.json(user);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            to: {
                name: 'Renan Cavalcante',
                email: 'renan.cav.ti@gmail.com'
            },
            message: {
                subject: 'Esse é o assunto do email',
                body: 'Seja bem vindo!'
            }
        })
        return res.send()
    }
}