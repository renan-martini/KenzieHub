import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { RegisterPage } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import API from "../../Services/Api";

function Register() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório!"),
    email: yup
      .string()
      .required("Email obrigatório!")
      .email("Formato de Email inválido!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .min(6, "Senha deve possuir ao menos 6 caracteres!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes!"),
    bio: yup.string().required("Bio obrigatória!"),
    contact: yup.string().required("Contato obrigatório!"),
    course_module: yup.string().required("Módulo obrigatório!"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    for (const error in errors) {
      toast.error(errors[error].message, {
        toastId: errors[error].message,
      });
    }
  }, [errors]);

  const newUser = ({ name, email, password, bio, course_module, contact }) => {
    toast.promise(
      API.post("users", {
        name,
        email,
        password,
        bio,
        course_module,
        contact,
      }).then((res) => {
        setTimeout(() => {
          history.push("/login");
        }, 1000);
      }),
      {
        pending: "Cadastrando usuário...",
        success: "Usuário cadastrado!",
        error: "Falha ao cadastrar",
      }
    );
  };

  return (
    <RegisterPage>
      <header>
        <img src={Logo} alt="" />
        <button onClick={() => history.push("/login")}>Voltar</button>
      </header>
      <div className="container">
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <form action="" onSubmit={handleSubmit(newUser)}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
          </div>
          <div>
            <label htmlFor="passwordConfirm">Confirmar Senha</label>
            <input
              id="passwordConfirm"
              type="password"
              placeholder="Confirme sua senha"
              {...register("passwordConfirm")}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
          </div>
          <div>
            <label htmlFor="contact">Contato</label>
            <input
              id="contact"
              type="contact"
              placeholder="Seu contato"
              {...register("contact")}
            />
          </div>
          <div>
            <label htmlFor="module">Selecionar módulo</label>
            <select id="module" {...register("course_module")} value="1">
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </select>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </RegisterPage>
  );
}

export default Register;
