
import Header from './Components/Header'
import Content from './Components/Content'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Work from './Components/Work'

const App = () => {


  return (

    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/content' element={<Content />} />
      </Routes>
    </Router>

  )
}

export default App