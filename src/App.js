import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Display from "./components/display/Display";


function App() {
  return (
      <div className="App">
        <Header />
        <Input />
        <Display/>
        <Footer />
      </div>
  );
}

export default App;
