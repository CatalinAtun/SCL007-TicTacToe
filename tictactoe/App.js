import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      playerOne: 1,
    }
    this.startGame = this.startGame.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  componentDidMount() {
    this.startGame;
  }

  componentDidUpdate() {
    let showWinner = this.checkWinner();

    // ganar con X (1) o O (-1)
    if (showWinner === 1) {
      alert('gano X')
      this.startGame();
    }
    if (showWinner === -1) {
      alert('gano O')
      this.startGame();
    }

    if (showWinner === 0) {
      alert('nadie gana')
    }

  }

  startGame() {
    this.setState({
      gameState:
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ],
      playerOne: 1
    })
  }

  checkWinner() {
    const numGrid = 3;
    let arr = this.state.gameState;

    // ganar con row X (1) o O (-1)
    for (let i = 0; i < numGrid; i++) {
      let sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum === 3) {
        return 1
      } if (sum === -3) {
        return -1
      }
    };

    // ganar con col x (1) o O (-1)
    for (let i = 0; i < numGrid; i++) {
      let sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum === 3) {
        return 1
      } if (sum === -3) {
        return -1
      }
    };

    // diagonal izquierda derecha
    let sumDiagLeft = arr[0][0] + arr[1][1] + arr[2][2]
    if (sumDiagLeft === 3) {
      return 1
    } if (sumDiagLeft === -3) {
      return -1
    }

    //diagonal derecha izquierda
    let sumDiagRight = arr[2][0] + arr[1][1] + arr[0][2]
    if (sumDiagRight === 3) {
      return 1
    } if (sumDiagRight === -3) {
      return -1
    }

    let zeroes = 0;
    for (let i = 0; i < numGrid; i++) {
      for (let e = 0; e < numGrid; e++) {
        if (arr[i][e] === 0) {
          zeroes++;
        }
      }
    }
    if (zeroes === 0) {
      return 0
    }
  }


  gridTouch = (row, col) => {
    let value = this.state.gameState[row][col];
    if (value !== 0) {
      return
    }

    let playerOne = this.state.playerOne;

    let arr = this.state.gameState;
    arr[row][col] = playerOne;
    this.setState({
      gameState: arr
    });

    let playerTwo =
      (playerOne === 1) ? -1 : 1;

    this.setState({
      playerOne: playerTwo
    });

  }

  showIcon = (row, col) => {
    let valueItems = this.state.gameState[row][col];
    if (valueItems === 1) {
      return <Icon name="close" style={styles.xStyle} />;
    } if (valueItems === -1) {
      return <Icon name="circle-outline" style={styles.oStyle} />;
    } else {
      return <View />;
    }
  }

  // Imprime de quien es el turno
  turn() {
    if (this.state.playerOne === 1) {
      return 'X'
    }
    if (this.state.playerOne === -1) {
      return 'O'
    }
  }

  componentDidUpdate() {
    let showWinner = this.checkWinner();

    // ganar con X (1) o O (-1)
    if (showWinner === 1) {
      alert('Ganó X')
      this.startGame();
    }
    if (showWinner === -1) {
      alert('Ganó O')
      this.startGame();
    }
    if (showWinner === 0) {
      alert('Nadie gana')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TIC TAC TOE</Text>
        <Text style={{ color: 'yellow', fontSize: 30 }}>Turno de: {this.turn()}</Text>

        <Button
          onPress={() => this.startGame()}
          title="Refresh"
          color="darkgray"
        />

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.gridTouch(0, 0)} style={[styles.borderView, { borderRightWidth: 1, borderBottomWidth: 1 }]}>
            {this.showIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.gridTouch(0, 1)} style={[styles.borderView, { borderRightWidth: 1, borderLeftWidth: 1, borderBottomWidth: 1 }]}>
            {this.showIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.gridTouch(0, 2)} style={[styles.borderView, { borderRightWidth: 2, borderLeftWidth: 1, borderBottomWidth: 1 }]}>
            {this.showIcon(0, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.gridTouch(1, 0)} style={[styles.borderView, { borderRightWidth: 1, borderBottomWidth: 1, borderTopWidth: 1 }]}>
            {this.showIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.gridTouch(1, 1)} style={[styles.borderView, { borderRightWidth: 1, borderLeftWidth: 1, borderBottomWidth: 1, borderTopWidth: 1 }]}>
            {this.showIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.gridTouch(1, 2)} style={[styles.borderView, { borderLeftWidth: 1, borderBottomWidth: 1, borderTopWidth: 1 }]}>
            {this.showIcon(1, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.gridTouch(2, 0)} style={[styles.borderView, { borderRightWidth: 1, borderTopWidth: 1 }]}>
            {this.showIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.gridTouch(2, 1)} style={[styles.borderView, { borderRightWidth: 1, borderLeftWidth: 1, borderTopWidth: 1 }]}>
            {this.showIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.gridTouch(2, 2)} style={[styles.borderView, { borderLeftWidth: 1, borderTopWidth: 1 }]}>
            {this.showIcon(2, 2)}
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'whitesmoke',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderView: {
    borderWidth: 2,
    borderColor: 'gray',
    borderStyle: 'dotted',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  xStyle: {
    color: "coral",
    fontSize: 60,
  },
  oStyle: {
    color: "lightgreen",
    fontSize: 60,
  }
});
