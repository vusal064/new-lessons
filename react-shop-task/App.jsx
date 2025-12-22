import Header from "./components/Header";
import Main from "./components/Main";
import CardProvider from "./Context/CardContext";
function App(){
  return(
    <>
    <CardProvider>
      <Header />
      <Main />
    </CardProvider> 
    </>
  )
}
export default App