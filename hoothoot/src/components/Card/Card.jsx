import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

/**
 *
 * @docs for card https://react-bootstrap.netlify.app/docs/components/cards/
 */

export default function ListCard({ img, content }) {
  return (
    <div>
      {/* Main Card */}
      <Card bg={"light"} style={{ width: "20rem" }}>
        {/* Image */}
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
