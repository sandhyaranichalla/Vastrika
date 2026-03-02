import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthContextProvider from "./stores/Context/AuthContext";
// import AuthContecdxtProvider from "./stores/Context/AuthContext";
// import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./stores/pages/Cartcontext";
import SearchContextProvider from "./stores/Context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <BrowserRouter>
  <React.StrictMode>
      <AuthContextProvider>
        <SearchContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </SearchContextProvider>
      </AuthContextProvider>
  </React.StrictMode>
);
//   {/* // </BrowserRouter> */}
// );
// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </AuthContextProvider>
//   </React.StrictMode>