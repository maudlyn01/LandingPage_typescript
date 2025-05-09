import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
export const App = ()=>{
 return (
  <div>
    <Header name={"TechStore"} career={"Tecnologia"} catchPhrase={"O futuro em bits e bytes ao seu alcance"}/>
    <Main/>
    <Footer name={"Maud"} />

  </div>
  );
};
