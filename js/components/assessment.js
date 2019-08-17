export class Assessment extends React.Component {
  render() {
    return (
      <div className="flashcard__assessment">
        <div className="flashcard__assessment__comparison flashcard__assessment__comparison--pros">
          <i className="material-icons">thumb_up</i>
          <ul>
            {this.props.assessment.pros.map(pros => <li>{pros}</li>)}
          </ul>
        </div>
        <div className="flashcard__assessment__comparison flashcard__assessment__comparison--cons">
          <i className="material-icons">thumb_down</i>
          <ul>
						{this.props.assessment.cons.map(cons => <li>{cons}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}