import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SideBar from '../components/sidebar'
import AdminBlog from '../components/admin-blog'
import AdminHome from '../components/admin-home'

import '../styles/admin.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class AdminPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: AdminHome
    }
    this.sidebarWatcher = this.sidebarWatcher.bind(this)
  }

  sidebarWatcher (event, selected) {
    switch (selected) {
      case 0:
        this.setState({ selected: AdminHome })
        break
      case 1:
        this.setState({ selected: AdminBlog })
        break
      default:
        this.setState({ selected: AdminHome })
    }
  }

  generator () {
    return React.createElement(this.state.selected, {})
  }

  render () {
    return (
      <Container>
        <Row>
          <Col xs={2} md={2} lg={2}>
            <SideBar watcher={this.sidebarWatcher}></SideBar>
          </Col>
          <Col>
            {this.generator()}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AdminPage
