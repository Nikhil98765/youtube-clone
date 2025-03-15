import { Provider } from 'react-redux';
import './App.css';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { AppStore } from './store/AppStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import { WatchPage } from './components/WatchPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchPage />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={AppStore}>
      <Header />
      <RouterProvider router={routes}/>
    </Provider>
  );
}

export default App;
