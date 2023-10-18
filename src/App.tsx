import Home from './pages/Home'
import Login from './pages/auth/login/Login'
import SignUp from './pages/auth/signup/SignUp'
import SelectAndEnterForm from './pages/SelectAndEnterForm'
import Page from './pages/Page'
import Demo_view from './pages/Demo_view'





import { BrowserRouter, Routes, Route } from "react-router-dom"
import Demo_view2 from './pages/Demo_view2'
import Demo_view3 from './pages/Demo_view3'
import Demo_view4 from './pages/Demo_view4'

function App() {

  return (
    <>
      <div>
        {/* 这里不知道要怎么更改 */}
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/page' element={<Page />} />
            <Route path='/newgantt' element={<SelectAndEnterForm />} />
            <Route path='/demo_view' element={<Demo_view />} />
            <Route path='/demo_view2' element={<Demo_view2 />} />
            <Route path='/demo_view3' element={<Demo_view3 />} />
            <Route path='/demo_view4' element={<Demo_view4 />} />
            

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
