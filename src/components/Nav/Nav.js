import React from "react";
import "./Nav.css";

const Nav = props => (

    <div className="jumbotron">
        <nav>
            <ul>
                <div>
                    <a href="/clicky-game/">{props.title}</a>
                </div>
                <div>
                    <strong></strong> {props.rightWrong}
                </div>
                <div className="score">
                    <strong>Score:</strong> {props.score}
                </div>
                <div>
                    <strong>Best Score:</strong> {props.bestScore}
                </div>

            </ul>
        </nav>
    </div>

);

export default Nav;