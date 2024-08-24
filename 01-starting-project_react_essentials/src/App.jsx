import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  // return can only return one element, that's why is necessary to add a <div></div> wraping the Header and the main
  // However, there's a Fragment element in react that can be used to wrap elements without adding an extra div to the DOM
  // The Fragment can be replaced by <></>
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
