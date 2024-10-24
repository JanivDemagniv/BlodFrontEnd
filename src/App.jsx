import { BrowserRouter } from 'react-router-dom'
// import './App.css'
import 'normalize.css';
import Layout from './layout/Layout'
import CustomTheme from './providers/CustomTheme'
import Router from './routes/Router'
import SnackBarProvider from './providers/SnackBarProvider';

function App() {

  return (
    <>
      <BrowserRouter>
        <CustomTheme>
          <SnackBarProvider>
            <Layout>
              <Router />
            </Layout>
          </SnackBarProvider>
        </CustomTheme>
      </BrowserRouter>
    </>
  )
}

export default App
