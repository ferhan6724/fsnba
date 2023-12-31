import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);

  return (
    <Col>
      <Card className="player-card" role="button" onClick={() => setShowImage(!showImage)}>
        {showImage ? (
          <Card.Img variant="top" src={img} height="350px" />
        ) : (
          <ul className="m-auto">
            {" "}
            {statistics.map((item, i) => (
              <li className="list-unstyled h-5 text-start" key={i}>
                🏀{item}
              </li>
            ))}
          </ul>
        )}

        <Card.Footer>
          <Card.Title>{name}</Card.Title>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PlayerCard;
