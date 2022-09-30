const styles = {
  appBar: {
    position: "relative",
  },
  container: {
    display: "flex",
    justifyContent: " center",
  },
  layout: (size) => ({
    marginTop: "100px",
    width: size <= 800 ? "auto" : "700px",
    marginLeft: "5px",
    marginRight: "5px",
  }),
  paper: {
    marginTop: "15px",
    marginBottom: "15px",
    padding: "10px",
  },
  stepper: {
    padding: "10px",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: "15px",
    marginLeft: "5px",
  },
  divider: {
    margin: "20px 0",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default styles;
