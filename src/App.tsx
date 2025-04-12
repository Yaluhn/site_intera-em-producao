import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="bg ">
      <Header />
      <main className="content">
        <Main/>
      </main>
      <Footer />
    </div>
  )
}

export default App
