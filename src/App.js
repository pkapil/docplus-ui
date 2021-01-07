import "./App.css";
import PatientForm from "./PatientForm";
import NavBar from "./NavBar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function App() {
  const classes = {
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: 20,
      textAlign: "center",
      fontFamily: "Roboto",
    },
  };

  return (
    <div className="App">
      <NavBar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <PatientForm />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
