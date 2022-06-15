import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Modal } from "@mui/material";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { style } from "./style";
import * as yup from "yup";
import { toast } from "react-toastify";
import API from "../../Services/Api";
import { useEffect } from "react";

function EditTech({ open, handleClose, tech, setTechs }) {
  const user = JSON.parse(localStorage.getItem("@khub:user"));
  const formSchema = yup.object().shape({
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

  const editTech = (data) => {
    toast.promise(
      API.put(`users/techs/${tech.id}`, data).then((res) => {
        API.get(`users/${user.id}`).then((res) => setTechs(res.data.techs));
        handleClose();
      }),
      {
        pending: "Editando tecnologia...",
        success: "Tecnologia Editada!",
        error: "Erro ao editar!",
      }
    );
  };

  const deleteTech = () => {
    toast.promise(
      API.delete(`users/techs/${tech.id}`).then((res) => {
        API.get(`users/${user.id}`).then((res) => setTechs(res.data.techs));
        handleClose();
      }),
      {
        pending: "Excluindo tecnologia...",
        success: "Tecnologia Excluida!",
        error: "Erro ao excluir!",
      }
    );
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <header>
          <h4>Detalhes da Tecnologia</h4>
          <button onClick={handleClose}>
            <AiOutlineClose />
          </button>
        </header>
        <form action="" onSubmit={handleSubmit(editTech)}>
          <div>
            <label htmlFor="title">Nome do projeto</label>
            <input id="title" type="text" placeholder={tech.title} disabled />
          </div>
          <div>
            <label htmlFor="status">Selecionar status</label>
            <select
              id="status"
              defaultValue={tech.status}
              {...register("status")}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <div className="buttons">
            <button className="save" type="submit">
              Salvar Alterações
            </button>
            <button type="button" className="delete" onClick={deleteTech}>
              Excluir
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default EditTech;
