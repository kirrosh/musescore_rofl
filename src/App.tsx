import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import IsMobileContext from "./tools/IsMobileContext";

function App() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const recalculate = () => {
      setIsMobile(!window.matchMedia("(min-width: 815px)").matches);
      console.log(window.matchMedia("(min-width: 815px)").matches);
    };
    recalculate();
    window.addEventListener("resize", recalculate);
    return () => window.removeEventListener("resize", recalculate);
  }, []);
  return (
    <div className="App">
      <IsMobileContext.Provider value={isMobile}>
        <MainPage />
      </IsMobileContext.Provider>
    </div>
  );
}

export default App;
