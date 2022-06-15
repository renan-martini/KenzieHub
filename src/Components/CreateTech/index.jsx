import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Modal } from "@mui/material";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { style } from "./style";
import * as yup from "yup";
import API from "../../Services/Api";
import { useEffect } from "react";
import { toast } from "react-toastify";

function CreateTech({ open, handleClose, setTechs }) {
  const user = JSON.parse(localStorage.getItem("@khub:user"));
  const formSchema = yup.object().shape({
    title: yup.string().required("Nome obrigatório!"),
    status: yup.string().required("Status obrigatório!"),
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

  const newTech = (data) => {
    toast.promise(
      API.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@khub:token") || ""}`,
        },
      }).then((res) => {
        API.get(`users/${user.id}`).then((res) => setTechs(res.data.techs));
        handleClose();
      }),
      {
        pending: "Cadastrando tecnologia...",
        success: "Tecnologia cadastrada!",
        error: "Tecnologia já cadastrada!",
      }
    );
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <header>
          <h4>Cadastrar Tecnologia</h4>
          <button onClick={handleClose}>
            <AiOutlineClose />
          </button>
        </header>
        <form action="" onSubmit={handleSubmit(newTech)}>
          <div>
            <label htmlFor="title">Nome</label>
            <input
              id="title"
              type="text"
              placeholder="Nome da tecnologia"
              {...register("title")}
            />
          </div>
          <div>
            <label htmlFor="status">Selecionar status</label>
            <select
              id="status"
              defaultValue="Iniciante"
              {...register("status")}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </Box>
    </Modal>
  );
}

export default CreateTech;
