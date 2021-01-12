import "./App.css";
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
