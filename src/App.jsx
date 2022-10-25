import './App.css'
import { Provider } from 'react-redux'
import store from './redux'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  )
}

export default App
