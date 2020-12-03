export class Star extends React.Component {
  render() {
    return (
      <a
        className="star"
        href="https://github.com/officialpm/Sorting-Algorithms"
        target="_blank"
      >
        <div className="credits__text">Star me</div>
        <i className="credits__icon credits__icon--star material-icons">star</i>
        <div className="credits__text">on Github</div>
      </a>
    );
  }
}
