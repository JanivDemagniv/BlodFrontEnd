import { BrowserRouter } from 'react-router-dom'
// import './App.css'
import 'normalize.css';
import Layout from './layout/Layout'
import CustomTheme from './providers/CustomTheme'
import Router from './routes/Router'

function App() {

  return (
    <>
      <BrowserRouter>
        <CustomTheme>
          <Layout>
            <Router />
          </Layout>
        </CustomTheme>
      </BrowserRouter>
    </>
  )
}

export default App
