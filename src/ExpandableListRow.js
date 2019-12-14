import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'

class ExpandableListRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => (
      {open: !state.open}
    ));
  }

  render() {
    return <div id="rowOne">
      <Card>
        <Card.Header id="headingOne">
          <Button onClick={this.handleClick} aria-controls="collapse-text">
            <h2>{this.props.title}</h2>
          </Button>
            <p>{this.props.text}</p>
        </Card.Header>
    
        <Collapse in={this.state.open} id="collapse-text">
          <Card.Body>
            <Card>
              one
            </Card>
            <Card>
              two
            </Card>
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  }
}

export default ExpandableListRow;