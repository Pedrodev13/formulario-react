import { Form } from "@/components/Form";

const Page = () => {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center mx-auto">
      <h1 className="font-bold text-[26px] md:text-[2rem] lg:text-[2rem] text-white"> Inscreva-se no meu Portifólio</h1>
      <p className="text-white ">Inscreva-se para visualizar meus projetos</p>
      <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-md max-w-xs md:max-w-full lg:max-w-full">
      <Form />
      </div>
      <p className="text-slate-100 text-xs w-96 mt-2 text-center">Ao se inscrever, você passará a receber emails.</p>
    </div>
  )

}

export default Page;