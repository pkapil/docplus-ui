import "./App.css";
import GenericForm from "./GenericForm";
import NavBar from "./NavBar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Demo from "./demo";

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
      <Demo />
    </div>
  );
}

export default App;
