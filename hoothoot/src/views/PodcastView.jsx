import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function PodcastView() {
  return (
    <>
      <div>
        <Form>
          <Form.Group className="mb-3" size="md" controlId="search">
            {/* <Form.Label>Search</Form.Label> */}
            <Form.Control type="text" placeholder="Search" />
          </Form.Group>
        </Form>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../assets/placeholder.jpg" />
          <Card.Body>
            <Card.Title>Review Score</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h1>Title of Podcast</h1>
        <h2>Publisher</h2>
        <h2>Website</h2>
        <p>Description</p>
      </div>
      <button>Subscribe</button>
      <div>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="tab1" title="Tab 1">
            Tab 1 content - Reviews?
          </Tab>
          <Tab eventKey="tab2" title="Tab 2">
            Tab 2 content - Full details?
          </Tab>
          <Tab eventKey="tab3" title="Tab 3">
            Tab 3 content - ??
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

//TBC - to add routing and styling

export default PodcastView;
