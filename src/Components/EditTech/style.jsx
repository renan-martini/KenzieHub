export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "370px",
  height: "300px",
  bgcolor: "#212529",
  boxShadow: 24,
  color: "white",
  borderRadius: "4px",
  border: "none",

  header: {
    bgcolor: "#343B41",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 12px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",

    button: {
      bgcolor: "transparent",
      border: "none",
      color: "#868E96",
    },
  },

  form: {
    height: "calc(100% - 40px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "21px",
    padding: "20px 13px 25px 17px",

    div: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      gap: "13px",

      input: {
        width: "100%",
        height: "40px",
        bgcolor: "#343B41",
        border: "none",
        color: "white",
        padding: "0px 13px",
        borderRadius: "4px",
      },

      select: {
        width: "100%",
        height: "40px",
        bgcolor: "#343B41",
        border: "none",
        color: "white",
        padding: "0px 13px",
        borderRadius: "4px",
      },
    },

    ".buttons": {
      display: "flex",
      flexDirection: "row",
      gap: "18px",
      ".save": {
        width: "calc(100% - 96px)",
        minHeight: "40px",
        borderRadius: "4px",
        bgcolor: "#FF577F",
        border: "none",
        color: "white",
      },
      ".delete": {
        width: "78px",
        height: "40px",
        bgcolor: "#868E96",
        color: "white",
        border: "none",
        borderRadius: "4px",
      },
    },
  },
};
