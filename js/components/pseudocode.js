export class Pseudocode extends React.Component {
  componentDidMount() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  componentDidUpdate() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <pre className="flashcard__pseudocode">
        <code>
          {this.props.pseudocode}
        </code>
      </pre>
    );
  }
}