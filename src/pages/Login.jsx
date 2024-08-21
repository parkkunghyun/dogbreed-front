import React from "react";
import Nav from "../components/Nav";
import "./Login.css";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="container">
      <Nav />
      <h1 className="title">로그인</h1>
      <form className="loginform" method="POST">
        <Input placeholder={"이메일을 입력해주세요"} />
        <Input placeholder={"비밀번호를 입력해주세요"} />
        <Button text={"로그인 버튼을 눌러주세요!"} />
      </form>
    </div>
  );
};

export default Login;
