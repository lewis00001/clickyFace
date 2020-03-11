import React, { Component } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import face from "./faces.json";
import "./App.css";

class App extends Component {

    state = {
      face,
      score: 0,
      topScore: 0,
      newTopScore: 0
    };

    resetGame = () => {
        this.setState({ topScore: 0, score: 0, newTopScore: 0 });
        face.sort((a,b) => 0.5 - Math.random());
    };

    onClick = id => {
    // checks for match
    const face = this.state.face
    const clickedFace = this.state.face.filter(face => face.id === id);

    if (clickedFace[0].click) {
        // randomize array order
        face.sort((a,b) => 0.5 - Math.random());
        // reset state
        this.setState({ topScore: this.state.score, score: 0, newTopScore: this.state.newTopScore });
        // update the topscore if new is greater
        if (this.state.score > this.state.topScore) {
            this.setState({ newTopScore: this.state.topScore });
        };
        // reset all card "click" value to false
        for (var i = 0; i < face.length; i++) {
            face[i].click = false;
        };
        // end game message
        alert("Sorry, you cliked the same face more than once. Try again.");
        // check win condition
        } else if (this.state.score < 12) {
            clickedFace[0].click = true;
            // increment counter
            this.setState({ score: this.state.score + 1 }, function() {
                if (this.state.score === 12) {
                    alert("Congrats! You Won the Game!");
                    // run win condition
                    this.setState({ score: 0, topScore: 0, newTopScore: 0 });
                }
            });
            // randomize array order
            face.sort((a,b) => 0.5 - Math.random());
        }
    }

    // render page content
    render() {
      return ( 
        <>
        <Header
        score={this.state.score}
        topScore={this.state.topScore}
        resetGame={this.resetGame}
        />
        <Wrapper>
        {this.state.face.map(face => (
            <Card
            onClick={this.onClick}
            id={face.id}
            key={face.id}
            image={face.image}
            click={face.click}
            />
        ))}
        </Wrapper>
        </>
      );
    }
  }
  
  export default App;
