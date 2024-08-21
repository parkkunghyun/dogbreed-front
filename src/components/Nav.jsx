import React from "react";
import "./components.css";

const Nav = () => {
  return (
    <header className="nav-header">
      <div>
        <img className="logo" src="/cute.png" />
      </div>

      <nav className="nav-menu">
        <ul>
          <li>
            <a href="/">견종분석</a>
          </li>
          <li>
            <a href="/behavior-analysis">행동분석</a>
          </li>
          <li>
            <a href="/diary">다이어리</a>
          </li>
          <li>
            <a href="/login">로그인</a>
          </li>
          <li>
            <a href="/signup">회원가입</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
