import React from "react";
// import Header from "./Components/Header/Header";
// import AdminRegister from "./Components/Admin/AdminRegister";
import AdminLogin from "./Components/Admin/AdminLogin";
import ProductApp from "./Components/Product/ProductApp";

// import Login from "./Components/Authentication/Login";
// import Signup from "./Components/Authentication/Signup";

const App = () => {
  return (
    <div>
      <h1> Register Here</h1>
      {/*<Login /> */}
      {/* <Signup /> */}
      <AdminLogin />
      <ProductApp/>
    </div>
  );
};

export default App;
