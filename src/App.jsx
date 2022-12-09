// import Home from "./Home";
import { Provider } from "react-redux";
import store from "./ReduxComponents/store";
// import DisplayPage from "./DisplayPage";
import Main from "./ReactComponents/Main";
import DisplayPage from "./ReactComponents/DisplayPage";
// import Main from "./Main";
const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
        <DisplayPage />
      </Provider>
    </div>
  );
};

export default App;
