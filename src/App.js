import "./App.css";
import PrimarySearchAppBar from "./component/appbar";
import JobList from "./component/JobList";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <JobList></JobList>
    </div>
  );
}

export default App;
