export class Complexity extends React.Component {
	componentDidMount() {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	}
  
  componentDidUpdate() {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	}
  
  render() {
    return (
      <table className="flashcard__complexity">
        <tr>
          <td className="flashcard__complexity__cell" colSpan="3">Time Complexity</td>
          <td className="flashcard__complexity__cell">Space Complexity</td>
        </tr>
        <tr>
          <td className="flashcard__complexity__cell">Best</td>
          <td className="flashcard__complexity__cell">Average</td>
          <td className="flashcard__complexity__cell">Worst</td>
          <td className="flashcard__complexity__cell">Worst</td>
        </tr>
        <tr>
          <td className="flashcard__complexity__cell">{'$\\Omega(' + this.props.complexity.time.best + ')$'}</td>
          <td className="flashcard__complexity__cell">{'$\\Theta(' + this.props.complexity.time.average + ')$'}</td>
          <td className="flashcard__complexity__cell">{'$O(' + this.props.complexity.time.worst + ')$'}</td>
          <td className="flashcard__complexity__cell">{'$O(' + this.props.complexity.space.worst + ')$'}</td>
        </tr>
      </table>
    );
  }

};