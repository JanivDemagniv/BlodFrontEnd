import './App.css'
import Layout from './layout/Layout'
import postsMock from './posts/mockData'
import Posts from './posts/pages/Posts'
import CustomTheme from './providers/CustomTheme'

function App() {

  return (
    <>
      <CustomTheme>
        <Layout>
          <Posts posts={postsMock} />
        </Layout>
      </CustomTheme>
    </>
  )
}

export default App
