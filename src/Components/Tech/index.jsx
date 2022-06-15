import StyledTech from "./style";

function Tech({ tech, handleOpenEdit }) {
  return (
    <StyledTech onClick={() => handleOpenEdit(tech)}>
      <h3>{tech.title}</h3>
      <p>{tech.status}</p>
    </StyledTech>
  );
}

export default Tech;
