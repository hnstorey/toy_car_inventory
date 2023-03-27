import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Navbar from './components/Navbar'
import routes from './config/routes'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
                key={ index }
                path={ route.path }
                element={
                  <route.component />
                }></Route>
      )) }
          </Routes>
        </Provider>
    </BrowserRouter>
  )
}

export default App