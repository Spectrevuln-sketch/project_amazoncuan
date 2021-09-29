import Routes from "../Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthAdminProvider } from '../context/AuthAdmin';
import { MyDataProvider } from '../context/CurrentAdmin';
import { VipDataProvider } from '../context/AllVipLevel';
import { TugasContextProvider } from '../context/TugasContext';
function App() {
  return (
    <AuthAdminProvider>
      <MyDataProvider>
        <VipDataProvider>
          <TugasContextProvider>
            <div>
              <Routes />
            </div>
          </TugasContextProvider>
        </VipDataProvider>
      </MyDataProvider>
      <ToastContainer />
    </AuthAdminProvider>
  );
}

export default App;
