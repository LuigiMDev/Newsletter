import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors(null);

    const data: User = {
      name,
      email,
      agree
    };
    const validateErrors = validate(data);
  
    if(Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors)
      return
    }
    setName("");
    setEmail("");
    setAgree(false);
    
    alert("Obrigado por se Inscrever!")
  }

  

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 mb-3">
        <label className="text-sm" htmlFor="name">Nome</label>
        <input className="outline-none rounded-lg py-2 px-2 text-sm :placeholder:text-sm placeholder:text-stone-400 h-9" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" />
        {errors?.name && <small className="text-xs text-red-500">{errors?.name}</small>}
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <label className="text-sm" htmlFor="email">E-mail</label>
        <input className="outline-none rounded-lg py-2 px-2 text-sm :placeholder:text-sm placeholder:text-stone-400 h-9" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />
        {errors?.email && <small className="text-xs text-red-500">{errors?.email}</small>}
      </div>
      <div>
        <a className="text-xs underline mb-2" href="#">Leia os termos</a>
        <div className="flex gap-2 items-center">
          <input className="outline-none rounded-md h-9" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <label className="text-sm" htmlFor="agree">Concordo com os termos</label>
        </div>
        {errors?.agree && <small className="text-xs text-red-500">{errors?.agree}</small>}
      </div>
      <button className="bg-sky-500 text-white hover:bg-sky-600 py-2 px-4 rounded-lg transition-all">Cadastrar</button>
    </form>
  );
};

export default Form;
