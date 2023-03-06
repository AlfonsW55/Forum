import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from 'reactstrap';

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect className='fixed-top' expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="/">ElonUK</Navbar.Brand>
        <Navbar.Toggle type='button' className="navbar-toggler navbar-toggler" aria-controls="responsive-navbar-nav" >
          <i className='now-ui-icons text_align-center'></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className='text-right'>
          <Nav className="me-auto">
            <Nav.Link href="/jobs">Jobs</Nav.Link>
            <Nav.Link href="/courses">
              <p>Security	Courses</p>&nbsp;
              <Badge color="danger">Sale</Badge>
            </Nav.Link>
            <Nav.Link href="/agencies">
              Security Agencies
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <p style={{ fontWeight: "100" }}>Recruiting?</p>&nbsp;
              <p>Post a job</p>
            </Nav.Link>
            <Nav.Link className='register-cv'>
              Apply for a Job
            </Nav.Link>
            <Nav.Link>
              Agency Portal
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;