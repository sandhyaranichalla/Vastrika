import "./App.css";
import Landingpage from "./stores/pages/Landingpage";
import Sareespage from "./stores/pages/Sareespage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productdetailspage from "./stores/pages/Productdetailspage";
import CartPage from "./stores/pages/CartPage";
import AuthPage from "./stores/pages/AuthPage";
import ProtectedRoute from "./stores/components/ProtectedRoute";
import CheckoutPage from "./stores/pages/CheckoutPage";
import OrderSuccessPage from "./stores/pages/OrderSuccessPage";

import MyOrdersPage from "./stores/pages/MyOrdersPage";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/sarees" element={<Sareespage />} />
          <Route path="/product/:id" element={<Productdetailspage />} />
          <Route path="/cart"element={
                    <ProtectedRoute>
                      <CartPage />
                    </ProtectedRoute>
                  }
                />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/checkout" element={
                                      <ProtectedRoute>
                                        <CheckoutPage />
                                      </ProtectedRoute>
                                    }
          />

          <Route path="/order-success" element={
              <ProtectedRoute>
                <OrderSuccessPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-orders"
            element={
              <ProtectedRoute>
                <MyOrdersPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
