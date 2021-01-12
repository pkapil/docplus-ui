import "./App.css";
import GenericForm from "./GenericForm";
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
    alignItemsAndJustifyContent: {
      height: 100,
      backgroundColor: "red",
    },
  };

  return (
    <div className="App">
      <NavBar />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              {/* <PatientForm id={`5ff7c8664b1e6e4b98481701`} /> */}
              <GenericForm type="patient"/>
              <GenericForm type="hospital"/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
