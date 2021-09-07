import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Display from "./components/display/Display";
import { createStore } from "redux";
import { Provider } from "react-redux";
import addReducer from "./redux/reducer";

const store = createStore(
  addReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Input />
        <Display/>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
