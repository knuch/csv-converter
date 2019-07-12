import React from 'react';
import { Navbar, Grid, Row, Col, Button } from 'react-bootstrap'; 
import FileUploader from '../FileUploader/FileUploader';

const Header = (props) => {

  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">CSV converter</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <Grid>
        <Row>
          <Col>
            <FileUploader />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Header;