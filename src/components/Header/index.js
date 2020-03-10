import React from "react";
import "./style.css";

function Header(props) {
  return <div className="jumbotron text-center bg-light text-dark py-3 mb-3">
  <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-3">
        <h1>Clicky Face!</h1>
      </div>

      <div className="col-md-2">
        <button onClick={() => props.resetGame()} type="button" className="btn btn-warning">Reset Game</button>
      </div>

      <div className="col-md-3">
        <h4>Score: {props.score} | Top Score: {props.topScore}</h4>
      </div>
      <div className="col-md-2"></div>
  </div>
  <div className="row">
  <div className="col-md-2"></div>
  <div className="col-md-8">
    <h5>Play by clicking all 12 faces without selecting the same face twice! If you do, Game Over.</h5>
  </div>
  <div className="col-md-2"></div>
  </div>
</div>
}

export default Header;
