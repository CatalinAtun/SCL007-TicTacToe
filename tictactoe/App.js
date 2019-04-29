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
  }

  componentDidMount() {
    this.startGame;
  }

  startGame() {
    this.setState({
      gameState:
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ]
    })
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
      (playerOne == 1) ? -1 : 1;
    this.setState({ 
      playerOne: playerTwo 
    });
  }

  showIcon = (row, col) => {
    let valueItems = this.state.gameState[row][col];
    if (valueItems === 1){
      return <Icon name="close" style={styles.xStyle} />;
    } if (valueItems === -1){
      return <Icon name="circle-outline" style={styles.oStyle} />;
    } else {
      return <View />;
    }
  }

  refresh() {
    this.setState({
      ...this.state,
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TIC TAC TOE</Text>

        <Button
          onPress={() => this.refresh()}
          title="Refresh"
          color="#841584"
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
    color: 'gray',
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
    color: "red",
    fontSize: 60,
  },
  oStyle: {
    color: "green",
    fontSize: 60,
  }
});
