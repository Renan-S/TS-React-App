interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

//This interface is to force you to implement with the function

interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
    //Data trasnference object
}

class EmailService implements IEmailService {
    sendMail({to, message}: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;