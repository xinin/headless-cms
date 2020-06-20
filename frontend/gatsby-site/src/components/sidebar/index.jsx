import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Accordion from 'react-bootstrap/Accordion'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './index.css'

class SideBar extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selected: 0,
      watcher: props.watcher
    }
  }

  handleChange (event, selected) {
    this.setState({ selected: selected })
    this.state.watcher(event, selected)
  }

  render () {
    return (
      <div id="sidebar-main">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={(e) => { this.handleChange(e, 0) }}>
                                Home
              </Accordion.Toggle>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={(e) => { this.handleChange(e, 1) }}>
                                Pages
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                  <li>
                    <a href="#">View</a>
                  </li>
                  <li>
                    <a href="#">Create</a>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2" onClick={(e) => { this.handleChange(e, 1) }}>
                                Blog
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul>
                  <li>
                    <a href="#">View</a>
                  </li>
                  <li>
                    <a href="#">Create</a>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

SideBar.propTypes = {
  watcher: PropTypes.func.isRequired
}

SideBar.defaultProps = {
  selected: 0
}

export default SideBar
