import { Users } from "@/types/Users";

type Error = {
    [key: string]: string;

}

export const validate = (data: Users) => {
    const errors: Error = {};

    if(!data.name) {
        errors['name'] = 'O nome é obrigatório';
    }

    if(!data.email) {
        errors['email'] = 'O e-mail é obrigatório';
    }

    if(!data.agree) {
        errors['agree'] = 'Você precisa concordar com os termos';
    }

    return errors;
}