import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Spinner,
  Alert,
  Image,
  Badge,
  Card,
} from "react-bootstrap";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [screenshots, setScreenshots] = useState([]);


  const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

  useEffect(() => {
    const fetchGameDetails = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
        );
        setGame(res.data);
      } catch (err) {
        setError("Failed to fetch game details. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id, API_KEY]);

  const fetchScreenshots = async () => {
    try {
      const res = await axios.get(
        `https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`
      );
      setScreenshots(res.data.results);
    } catch (err) {
      console.error("Error fetching screenshots:", err);
    }
  };
  
  fetchScreenshots();

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!game) return null;

  return (
    <Container className="my-4">
      <Card className="shadow-lg p-3 rounded-4 game-detail-card">
        <Row>
          <Col md={5} className="mb-3 mb-md-0">
            <Image
              src={game.background_image}
              alt={game.name}
              fluid
              rounded
              className="w-100"
            />
          </Col>
          <Col md={7}>
            <h2 className="text-center fw-bold mb-3">{game.name}</h2>

            <div
              className="mb-3 text-muted"
              dangerouslySetInnerHTML={{
                __html: game.description.split("</p>")[0] + "</p>",
              }}
            />

            <h5 className="mt-4">🎮 Platforms</h5>
            <div className="mb-2">
              {game.platforms.map((p) => (
                <Badge key={p.platform.id} className="me-2 mb-1 badge-plain">
                
                  {p.platform.name}
                </Badge>
              ))}
            </div>

            <h5 className="mt-3">🧬 Genres</h5>
            <div className="mb-2">
              {game.genres.map((g) => (
                <Badge key={g.id} bg="info" className="me-2 mb-1 badge-plain">
                  {g.name}
                </Badge>
              ))}
            </div>

            <h5 className="mt-3">
              📅 Released:{" "}
              <span className="text-secondary">{game.released}</span>
            </h5>

            <h5 className="mt-3">
              ⭐ Rating:{" "}
              <Badge bg="success" className="ms-1">
                {game.rating}
              </Badge>
            </h5>

            {game.metacritic && (
              <h5 className="mt-3">
                🧪 Metacritic:{" "}
                <Badge bg="warning" className="ms-1">
                  {game.metacritic}
                </Badge>
              </h5>
            )}
          </Col>
        </Row>
      </Card>

      {screenshots.length > 0 && (
  <div className="mt-5">
    <h4 className="mb-3">📸 Screenshots</h4>
    <div className="d-flex flex-wrap gap-3">
      {screenshots.map((screenshot) => (
        <img
          key={screenshot.id}
          src={screenshot.image}
          alt="Game screenshot"
          className="rounded shadow-sm"
          style={{ width: '300px', height: 'auto', objectFit: 'cover' }}
        />
      ))}
    </div>
  </div>
)}
    </Container>
  );
};

export default GameDetail;
