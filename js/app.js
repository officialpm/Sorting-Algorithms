import { Flashcard } from './components/flashcard';
import { Credits } from './components/credits';
import { Star } from './components/star';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcards: [],
      flashcard: null
    };
    this.rightButtonClick = this.rightButtonClick.bind(this);
    this.leftButtonClick = this.leftButtonClick.bind(this);
  }

  rightButtonClick() {
    const idx =
      (this.state.flashcards.indexOf(this.state.flashcard) + 1) %
      (this.state.flashcards.length - 1);
    this.setState({ flashcard: this.state.flashcards[idx] });
  }

  leftButtonClick() {
    let idx = this.state.flashcards.indexOf(this.state.flashcard) - 1;
    idx = idx >= 0 ? idx : this.state.flashcards.length - 1;
    console.log(idx);
    this.setState({ flashcard: this.state.flashcards[idx] });
  }

  componentWillMount() {
    $.getJSON('./data/flashcards.json', response =>
      this.setState({ flashcards: response, flashcard: response[0] })
    );
  }

  render() {
    return (
      <div className="container">
        <Star />

        <div className="app">
          <button
            onClick={this.leftButtonClick}
            className="material-icons button button--left"
          >
            keyboard_arrow_left
          </button>
          {this.state.flashcard ? (
            <Flashcard className="flashcard" flashcard={this.state.flashcard} />
          ) : (
            <div className="flashcard flashcard--placeholder">
              <p className="loading-message">Loading...</p>
            </div>
          )}
          <button
            onClick={this.rightButtonClick}
            className="material-icons button button--right"
          >
            keyboard_arrow_right
          </button>
        </div>
        <Credits />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
