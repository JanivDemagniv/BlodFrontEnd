import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import postsMock from './posts/mockData'
import Posts from './posts/pages/Posts'
import CustomTheme from './providers/CustomTheme'
import Post from './posts/pages/Post'

function App() {

  return (
    <>
      <BrowserRouter>
        <CustomTheme>
          <Layout>
            {/* <Posts posts={postsMock} /> */}
            <Post post={postsMock[0]} />
          </Layout>
        </CustomTheme>
      </BrowserRouter>
    </>
  )
}

export default App
