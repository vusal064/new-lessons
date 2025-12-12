import React, { useState, useRef } from "react";
import "./login.css";

const Login = () => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  const message = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ad || !soyad || !email || !sifre) {
      message.current.textContent = "Xanalar boş ola bilməz!";
      message.current.style.color = "red";
      return;
    }

    console.log("Ad:", ad);
    console.log("Soyad:", soyad);
    console.log("Email:", email);
    console.log("Şifrə:", sifre);

    message.current.textContent = "Form uğurla göndərildi!";
    message.current.style.color = "green";

    setAd("");
    setSoyad("");
    setEmail("");
    setSifre("");
  };

  return (
    <div className="container">
      <h2>Login Form</h2>

      <p ref={message}></p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ad"
          value={ad}
          onChange={(e) => setAd(e.target.value)}
        />

        <input
          type="text"
          placeholder="Soyad"
          value={soyad}
          onChange={(e) => setSoyad(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Sifrə"
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
        />

        <button type="submit">Göndər</button>
      </form>
    </div>
  );
};

export default Login;
