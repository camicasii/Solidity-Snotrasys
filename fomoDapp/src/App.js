import MainPage from "./pages/main";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastProvider} from 'react-toast-notifications';
function App() {
  return (
    <ToastProvider>
      <MainPage />
    </ToastProvider>
  );
}

export default App;
