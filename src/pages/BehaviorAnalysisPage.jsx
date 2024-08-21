import React from "react";
import "./BehaviorAnalysisPage.css";
import Nav from "../components/Nav";

function BehaviorAnalysisPage() {
  return (
    <div className="behavior-analysis-page">
      <Nav />

      <main>
        <div className="video-placeholder">영상 업로드</div>
        <h2>우리 찡찡이님의 영상을 넣어주세요 (10초 ~ 1분이만)</h2>
        <a href="/behavior-result">
          <button className="action-button">행동 분석하기!</button>
        </a>
      </main>

      <footer>
        <div className="icon-placeholder">아이콘 1</div>
        <div className="icon-placeholder">아이콘 2</div>
        <div className="icon-placeholder">아이콘 3</div>
        <div className="icon-placeholder">아이콘 4</div>
        <div className="icon-placeholder">아이콘 5</div>
      </footer>
    </div>
  );
}

export default BehaviorAnalysisPage;
