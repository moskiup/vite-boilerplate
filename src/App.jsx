import { MyRoutes } from './router/routers';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <MyRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
