
import AppRouter from './routers/AppRouter';
import './tailwind.css';
import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {



  return (
    <>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </>
  );
}

export default App;
