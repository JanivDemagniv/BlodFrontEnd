import { BrowserRouter } from 'react-router-dom'
// import './App.css'
import 'normalize.css';
import Layout from './layout/Layout'
import CustomTheme from './providers/CustomTheme'
import Router from './routes/Router'
import SnackBarProvider from './providers/SnackBarProvider';
import UserProvider from './users/provider/UserProvider';

function App() {

  return (
    <>
      <BrowserRouter>
        <CustomTheme>
          <SnackBarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackBarProvider>
        </CustomTheme>
      </BrowserRouter>
    </>
  )
}

export default App
