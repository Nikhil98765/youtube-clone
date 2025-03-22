import { Provider } from 'react-redux';

import './App.css';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { AppStore } from './store/AppStore';

function App() {
  return (
    <Provider store={AppStore}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
