import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Posts from './pages/Posts'
import CustomTheme from './providers/CustomTheme'
import Post from './pages/Post'
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
