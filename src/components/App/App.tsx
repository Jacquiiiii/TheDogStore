// External imports
import { Route, Routes } from "react-router-dom"

// Components
import Header from '../Header/Header'
import Home from '../Home/Home'
import About from '../About/About'
import AllProducts from '../Products/AllProducts'
import Food from '../Products/Food'
import Treats from '../Products/Treats'
import Toys from '../Products/Toys'
import Supplies from '../Products/Supplies'
import Cart from '../Cart/Cart'
import Login from '../Login/Login'
import Register from "../Register/Register"
import Rewards from "../Rewards/Rewards"

const App = () => {
  return (
    <div className="App" data-testid="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Treats" element={<Treats />} />
        <Route path="/Toys" element={<Toys />} />
        <Route path="/Supplies" element={<Supplies />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Rewards" element={<Rewards />} />
      </Routes>
    </div>
  )
}

export default App
