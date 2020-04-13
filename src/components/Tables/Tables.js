import React, { Component } from 'react';
import Table from './Table';
import Button from '../Button/Button';

class Tables extends Component {
  state = {
    boardStatus: [false, false, false, false, false, false, false, false, false],
    showPerson: false,
    users: ["X", 'O'],
    currentUser: 0,
    result: false
  }

  constructor() {
    super();
  }

  resetTableState = () => {
    this.setState({
      boardStatus: [false, false, false, false, false, false, false, false, false],
      currentUser: 0,
      result: false,
      winner: null
    });
  }

  render = () => {

    return (
      <div class="tictac">
        <p> current user {this.state.currentUser}  && winner is {this.state.winner}</p>
        <Button clickHandler={this.resetTableState}> Reset Table </Button>
        <br /><br />
        {
          this.state.boardStatus.map((statusOfBoard, keys) => {
            if (keys == 2 || keys == 5) {
              return (<span><Table currentUser={this.state.currentUser} tableid={keys} status={statusOfBoard} click={this.changeStatusHandler} /><br /></span>)
            }
            return <Table currentUser={this.state.currentUser} tableid={keys} status={statusOfBoard} click={this.changeStatusHandler} />
          })
        }
      </div>
    );
  }




  changeStatusHandler = (event) => {
    let boardid = event.target.getAttribute('boardnumber');
    let boardStatus = this.state.boardStatus;
    let currentWinner = this.state.winner
    boardStatus[boardid] = this.state.users[this.state.currentUser];

    //Check if winner 
    let combination = [
      [0, 1, 2],
      [2, 5, 8],
      [8, 7, 6],
      [6, 3, 0],
      [0, 4, 8],
      [2, 4, 6],
      [3, 4, 5],
      [1, 4, 7]
    ]

    for (let j = 0; j < combination.length; j++) {
      var currentCombination = combination[j];
      if (
        (boardStatus[currentCombination[0]] !== false
          && boardStatus[currentCombination[0]] == boardStatus[currentCombination[1]])
        && (boardStatus[currentCombination[1]] == boardStatus[currentCombination[2]])) {
        if (!currentWinner) {
          currentWinner = boardStatus[boardid]
        }
      }
    }

    // ========
    let user = null;
    if (this.state.currentUser == 0) {
      user = 1;
    } else {
      user = 0;
    }
    console.log(user);
    console.log('current user ', this.state.currentUser)
    this.setState({
      winner: currentWinner,
      currentUser: user
    });
  }
}



export default Tables;