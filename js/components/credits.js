export class Credits extends React.Component {
  render() {
    return (
      <a className="credits" href="https://www.linkedin.com/in/parth-maniar-1b077a14a/" target="_blank">
        <i className="credits__icon credits__icon--code material-icons">code</i>
        <div className="credits__text">with</div>
        <i className="credits__icon credits__icon--favorite material-icons">favorite</i>
        <div className="credits__text">by Parth Maniar</div>
      </a>
    );
  }
}