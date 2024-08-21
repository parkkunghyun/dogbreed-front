import React from "react";
import "./Login.css";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = () => {
  return (
    <div className="container">
      <Nav />
      <h1 className="title">회원가입</h1>
      <form className="loginform" method="POST">
        <Input placeholder={"이메일을 입력해주세요"} />
        <Input placeholder={"비밀번호를 입력해주세요"} />
        <Input placeholder={"강아지 이름을 입력해주세요"} />
        <Button text={"반려견의 견종을 알아봐요!"} />
      </form>
    </div>
  );
};

export default Signup;
