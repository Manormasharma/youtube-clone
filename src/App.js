import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
const appRoute = createBrowserRouter([{
  Path: "/",
  element: <Body />,
  children:[
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    }
  ]
  // children will go where ever outlet
}
])
function App() {
  return (
    <Provider store={store}>
      <>
        <Header/>
        <RouterProvider router={appRoute} />
      </>
    </Provider>
  );
}

export default App;
// State Lift Up 