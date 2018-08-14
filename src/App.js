import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import characters from "./characters.json";
import "./App.css";

function shuffleCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    characters,
    currentScore: 0,
    bestScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.bestScore) {
      this.setState({ bestScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "Victory! You are the true King of the Iron Throne!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      bestScore: this.state.bestScore,
      rightWrong: "Defeat!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = shuffleCharacters(characters);
    this.setState({ characters: shuffledCharacters });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Game of Thrones Click Game"
          score={this.state.currentScore}
          bestScore={this.state.bestScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Click the image of the character you would like to battle.
          Click all 12 characters without
          any duplicates and you will be crowned King of the Iron Throne!
        </Title>

        <Container>
          <Row>
            {this.state.characters.map(character => (
              <Column size="md-3 sm-6">
                <CharacterCard
                  key={character.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={character.id}
                  image={character.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;















// ============================================================================

// import React from 'react';
// import CharacterCard from "./components/CharacterCard/CharacterCard";
// import Nav from "./components/Nav";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import Container from "./Container";
// import Row from "./Row";
// import Column from "./Column";
// import characters from "./characters.json";
// import "./App.css";

// function shuffleCharacters(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// class App extends React.Component {
//   state = {
//     characters,
//     score: 0,
//     bestScore: 0,
//     rightWrong: "",
//     clicked: [],
//   };

//   handleClick = id => {
//     if (this.state.clicked.indexOf(id) === -1) {
//       this.handleIncrement();
//       this.setState({ clicked: this.state.clicked.concat(id) });
//     } else {
//       this.handleReset();
//     }
//   };

//   handleIncrement = () => {
//     const newScore = this.state.score + 1;
//     this.setState({
//       score: newScore,
//       rightWrong: ""
//     });
//     if (newScore >= this.state.bestScore) {
//       this.setState({ bestScore: newScore });
//     }
//     else if (newScore === 12) {
//       this.setState({ rightWrong: "You are the true King of the Seven Kingdoms!" });
//     }
//     this.handleShuffle();
//   };

//   handleShuffle = () => {
//     let shuffledCharacters = shuffleCharacters(characters);
//     this.setState({ characters: shuffledCharacters });
//   };

//   render() {
//     return (
//       <Wrapper>
//         <Nav
//           title="Simpsons Clicky Game"
//           score={this.state.currentScore}
//           bestScore={this.state.bestScore}
//           rightWrong={this.state.rightWrong}
//         />

//         <Title>
//           Try to click on each character, but don't hit any duplicates, or
//           we'll release the hounds!!!
//         </Title>

//         <Container>
//           <Row>
//             {this.state.characters.map(character => (
//               <Column size="md-3 sm-6">
//                 <CharacterCard
//                   name={character.name}
//                   title={character.title}
//                   image={character.image}
//                   allegiance={character.allegiance}
//                   key={character.id}
//                   id={character.id}
//                 />

//               </Column>
//             ))}
//           </Row>
//         </Container>
//       </Wrapper>
//     );
//   }
// }


// export default App;

// ===================================================

// render() {
//   return (
//     <Wrapper>
//       <Nav
//         title="Game of Thrones Clicky Game"
//         score={this.state.currentScore}
//         bestScore={this.state.bestScore}
//         rightWrong={this.state.rightWrong}
//       />

//       <Title>
//         Click on the character you would like to battle, if you select all 12 characters without clicking
//         on a duplicate, you are the true King of the Iron Throne!
//         </Title>

//       <Container>
//         <Row>
// {
//   this.state.characters.map(character => (
//     <Column size="md-3 sm-6">
//       <CharacterCard
//         name={character.name}
//         title={character.title}
//         image={character.image}
//         allegiance={character.allegiance}
//         key={character.id}
//         id={character.id}
//       />

//     </Column>
//   ))
// }
//         </Row>
//       </Container>
//     </Wrapper>
//   );
// }

// render = () => (
//   < Wrapper >
//     <div className="jumbotron">
//       <h1>Game of Thrones</h1>
//       <p>Welcome to the Game of Thrones click game!</p>
//       <p>
//         <button className="btn btn-primary btn-lg">
//           Learn more
//         </button>
//       </p>
//     </div>

//     {
//       this.state.characters.map(character => {
//         return <CharacterCard
//           name={character.name}
//           title={character.title}
//           image={character.image}
//           allegiance={character.allegiance}
//           key={character.id}
//           id={character.id}
//         />
//       })
//     }
//   </Wrapper >
// );

// }
// export default App;

