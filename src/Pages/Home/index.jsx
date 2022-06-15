import HomePage from "./style";
import logo from "../../assets/Logo.svg";
import { FaPlus } from "react-icons/fa";
import Tech from "../../Components/Tech";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import CreateTech from "../../Components/CreateTech";
import API from "../../Services/Api";
import EditTech from "../../Components/EditTech";

function Home({ isLogged, setIsLogged }) {
  const user = JSON.parse(localStorage.getItem("@khub:user"));
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    API.get(`users/${user?.id}`).then((res) => setTechs(res.data.techs));
  }, [user?.id]);
  const history = useHistory();
  const logout = () => {
    const resolveAfter = new Promise((resolve) =>
      setTimeout(() => {
        localStorage.clear();
        setIsLogged(false);
        history.push("/login");
        resolve();
      }, 1500)
    );
    toast.promise(resolveAfter, {
      pending: "Deslogando...",
      success: "Deslogado com sucesso!",
      error: "Erro ao deslogar",
    });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = (tech) => {
    setTech(tech);
    setOpenEdit(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);

  const [tech, setTech] = useState({});

  if (isLogged) {
    history.push("/home");
  }
  return (
    <HomePage>
      <header>
        <img src={logo} alt="" />
        <button onClick={logout}>Sair</button>
      </header>

      <section>
        <h1>Olá, {user?.name}</h1>
        <span>{user?.course_module}</span>
      </section>

      <main>
        <div>
          <h2>Tecnologias</h2>
          <button onClick={handleOpen}>
            <FaPlus />
          </button>
        </div>

        <ul>
          {techs?.map((tech) => (
            <Tech tech={tech} key={tech.id} handleOpenEdit={handleOpenEdit} />
          ))}
        </ul>
      </main>

      <CreateTech setTechs={setTechs} open={open} handleClose={handleClose} />
      <EditTech
        setTechs={setTechs}
        open={openEdit}
        handleClose={handleCloseEdit}
        tech={tech}
      />
    </HomePage>
  );
}

export default Home;
