import React, { Component } from "react";
import { connect } from "react-redux";
import { newRound, answerQuestion } from "../actions/index";
import { bindActionCreators } from "redux";



function mapStateToProps(state) {
  return {
    categories: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      newRound: newRound,
      answerQuestion: answerQuestion
    },
    dispatch
  );
}

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectionMade: false};

    this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
    this.handleNextRound = this.handleNextRound.bind(this);
  }

  handleAnswerSelection(index) {
    if (this.state.selectionMade) return;
    let newState = Object.assign({}, this.state);
    newState["selectionMade"] = true;
    newState["answerIndex"] = index;
    newState.coords.lat = this.props.categories.quizApp.currentRoundQuestions[
      this.props.categories.quizApp.currentRoundAnswer
    ][0][2];
    newState.coords.lng = this.props.categories.quizApp.currentRoundQuestions[
      this.props.categories.quizApp.currentRoundAnswer
    ][0][3];
    this.setState(newState);
    let answer;
    index === this.props.categories.quizApp.currentRoundAnswer
      ? (answer = true)
      : (answer = false);
    this.props.answerQuestion(answer);
  }

  handleNextRound() {
    this.props.newRound();
    this.setState({ selectionMade: false, answerIndex: -1 });
  }

  render() {
    // console.log(this.props.categories.quizApp.questionsAndAnswersReversed)

    return (
      <div>
        <h2 className='topline'>Current Score: {this.props.categories.quizApp.userScore}/10</h2>
        <h2 className='topline'>Round {this.props.categories.quizApp.currentRound}</h2>
        <div className='progress-bar-container'>
          <div className='progress-bar' style={{ width: `${(this.props.categories.quizApp.currentRound*10)-10}%` }}/>
        </div>
        <h2>{!this.props.categories.quizApp.questionsAndAnswersReversed?`
          Which country is
          ${
      this.props.categories.quizApp.currentRoundQuestions[
        this.props.categories.quizApp.currentRoundAnswer
      ][0][1]
      }
          the capital of?`:`What is the capital city of ${this.props.categories.quizApp.currentRoundQuestions[
          this.props.categories.quizApp.currentRoundAnswer
        ][0][0]}?`}
        </h2>
        <h3>Select the answer from the list below:</h3>
        {this.props.categories.quizApp.currentRoundQuestions.map(
          (item, index) => (
            <h4
              onClick={() => this.handleAnswerSelection(index)}
              key={index}
              className={
                this.state.selectionMade &&
                index === this.props.categories.quizApp.currentRoundAnswer
                  ? "green-bg"
                  : this.state.selectionMade &&
                    index === this.state.answerIndex &&
                    index !== this.props.categories.quizApp.currentRoundAnswer
                    ? "red-bg"
                    : this.state.selectionMade &&
                      index !== this.state.answerIndex
                      ? "no-hover"
                      : ""
              }
            >
              {this.props.categories.quizApp.questionsAndAnswersReversed?`${item[0][1]}`:`${item[0][0]}`}
            </h4>
          )
        )}
        {this.state.selectionMade &&
          this.props.categories.quizApp.currentRoundAnswer ===
            this.state.answerIndex && <h3>That's Correct!</h3>}
        {this.state.selectionMade &&
          this.props.categories.quizApp.currentRoundAnswer !==
            this.state.answerIndex && (
          <h3>
            {`Incorrect! The correct answer was ${this.props.categories.quizApp.questionsAndAnswersReversed?this.props.categories.quizApp.currentRoundQuestions[
              this.props.categories.quizApp.currentRoundAnswer
            ][0][1]:this.props.categories.quizApp.currentRoundQuestions[
              this.props.categories.quizApp.currentRoundAnswer
            ][0][0]}`}
          </h3>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
