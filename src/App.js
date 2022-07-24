import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import "./App.css";
import { persistedStore, store } from "./redux/store";
import Routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import AuthRoutes from "./routes/AuthRoutes";
// import SignedRoutes from "./routes/SignedRoutes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate load={null} persistor={persistedStore}>
        <Routes />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
