'use client'

import { Users } from "@/types/Users";
import { validate } from "@/utils/validate";
import { FormEvent, useState } from "react"

export const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState<Users | null>(null);

    const handlleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setErrors(null);
        

        const data: Users = {
            name,
            email,
            agree,
    };

    const validateErrors = validate(data);

    if(Object.keys(validateErrors).length > 0) {
        setErrors(validateErrors);
        return;
    }
    alert('Obrigado por se inscrever!')

    setName('')
    setEmail('')
    setAgree(false)
}

    return (
        <form className="flex flex-col gap-3 " onSubmit={handlleSubmit}>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="name">Nome:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Digite seu nome" className="rounded-lg py-2 px-2 text-sm placeholder:tet-sm placeholder:text-stone-400"/>
            </div>
            {errors?.name && (
                <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
            )}
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="emai" placeholder="Insira seu melhor email" className="rounded-lg py-2 px-2 text-sm placeholder:tet-sm placeholder:text-stone-400"/>
            </div>
            {errors?.email && (
                <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
            )}
            <div className="flex flex-col">
                <a href="" className="text-xs underline mb-2">Leia os termos</a>
                <div className="flex gap-2 items-center">
                    <input value={name} onChange={(e) => setAgree(e.target.checked)} type="checkbox" />
                    <label className="text-sm" htmlFor="agree">Concordo com os termos</label>
                </div>
                    {errors?.agree && (
                <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
            )}
            </div>
            <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Cadastrar</button>
        </form>
    )
}
