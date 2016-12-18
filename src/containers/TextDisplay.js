import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { updateText } from 'actions/testActions';

@connect((state) =>({test: state.test}), {updateText})
export default class TextDisplay extends Component {
  static propTypes = {
    test: PropTypes.object.isRequired,
    updateText: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const {test, updateText} = this.props;

    return (
      <section>
        <h1>Welcome!</h1>
        <h2>{test.rootText}</h2>
        <textarea onChange={(e) => updateText(e.target.value)} />
      </section>
    );
  };
}
