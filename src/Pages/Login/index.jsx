import { LoginPage } from "./style";
import Logo from "../../assets/Logo.svg";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { toast } from "react-toastify";
import API from "../../Services/Api";

function Login({ isLogged, setIsLogged }) {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório!")
      .email("Formato de Email inválido!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .min(6, "Senha deve possuir ao menos 6 caracteres!"),
  });

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

  const logar = (data) => {
    toast.promise(
      API.post("sessions", data).then((res) => {
        localStorage.setItem("@khub:token", res.data.token);
        localStorage.setItem("@khub:user", JSON.stringify(res.data.user));
        setTimeout(() => {
          setIsLogged(true);
          history.push("/home");
        }, 1000);
      }),
      {
        pending: "Fazendo login...",
        success: "Logado com sucesso!",
        error: "Email ou senha inválidos!",
      }
    );
  };

  const history = useHistory();

  if (isLogged) {
    history.push("/home");
  }

  return (
    <LoginPage>
      <header>
        <img src={Logo} alt="" />
      </header>
      <div className="container">
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit(logar)}>
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
          <button type="submit">Entrar</button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <button onClick={() => history.push("/register")}>Cadastre-se</button>
      </div>
    </LoginPage>
  );
}

export default Login;
