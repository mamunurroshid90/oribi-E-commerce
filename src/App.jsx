import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom"
import RoutLayout from "./layout/RoutLayout"
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Journal from "./pages/journal/Journal"
import Error from "./components/error/Error"
import CartPage from "./pages/cart/CartPage"
import Checkout from "./pages/checkout/Checkout"
import MyAccount from "./pages/myAccount/MyAccount"
import LoginPage from "./pages/loginPage/LoginPage"
import Dashboard from "./pages/myAccount/Dashboard"
import Others from "./pages/myAccount/Others"
import Download from "./pages/myAccount/Download"
import Address from "./pages/myAccount/Address"
import AccountDetails from "./pages/myAccount/AccountDetails"
import SignUpPage from "./pages/signUp/SignUpPage"
import SingleProduct from "./components/product/SingleProduct"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RoutLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route element={<MyAccount />}>
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/others" element={<Others />} />
            <Route path="/Download" element={<Download />} />
            <Route path="/address" element={<Address />} />
            <Route path="/accountDetails" element={<AccountDetails />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
