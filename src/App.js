import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
