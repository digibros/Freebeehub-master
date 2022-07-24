import React, { useState } from "react";
import Login from "../components/auth/Login";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ModalOverlay from "../components/common/ModalOverlay";
import Categories from "../components/home/Categories";
import Features from "../components/home/Features";
import Main from "../components/home/Main";
import Products from "../components/home/Products";
import Suggestions from "../components/home/Suggestions";
import "../css/home.css";
function Home() {
  const [loginModal, setLoginModal] = useState(false);
  const closeModal = () => {
    setLoginModal(false);
  };
  const openModal = () => {
    setLoginModal(true);
  };
  return (
    <div>
      <Header openModal={openModal} />
      <Main />
      <Categories />
      <Suggestions />
      {/* <Features /> */}
      <Products />
      <Footer />
      {loginModal ? (
        <ModalOverlay>
          <Login close={closeModal} />
        </ModalOverlay>
      ) : null}
    </div>
  );
}

export default Home;
