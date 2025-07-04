// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import HomePage from './Pages/Home';
import Profile from './Pages/Profile';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import AddProductPage from './Pages/AddProductPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import MyOrdersPage from './Pages/MyOrdersPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/add-product" element={<AddProductPage />} />  
        <Route path="/cart" element={<CartPage />} />  
        <Route path="/checkout" element={<CheckoutPage/>} />  
        <Route path="/my-orders" element={<MyOrdersPage/>} />  
        
      </Routes>
    </Router>
  );
}

export default App;