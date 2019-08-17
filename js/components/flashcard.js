import { Pseudocode } from './pseudocode';
import { Assessment } from './assessment';
import { Complexity } from './complexity';

export class Flashcard extends React.Component {
  render() {
    return (
      <div className="flashcard">
        <div className="flashcard__flex">
          <h2 className="flashcard__flex__title">{this.props.flashcard.name}</h2>
          <div className="flashcard__flex__properties">
            <div className="flashcard__flex__properties__property">
              <i className="flashcard__flex__properties__property__icon material-icons">
                {this.props.flashcard.properties.inPlace ? 'done' : 'not_interested'}
              </i>
              <span className="flashcard__flex__properties__property__text">In-Place</span>
            </div>
            <div className="flashcard__flex__properties__property">
              <i className="flashcard__flex__properties__property__icon material-icons">
                {this.props.flashcard.properties.stable ? 'done' : 'not_interested'}
              </i>
              <span className="flashcard__flex__properties__property__text">Stable</span>
            </div>
          </div>
        </div>
        <p className="flashcard__description">{this.props.flashcard.description}</p>
				<Pseudocode pseudocode={this.props.flashcard.pseudocode} />
				<Assessment assessment={this.props.flashcard.assessment} />
        <Complexity complexity={this.props.flashcard.complexity} />
      </div>
    );
  }
};