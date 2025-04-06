import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import GameCard from "../components/GameCard";

const Library = () => {
    const favorites = useSelector((state) => state.favorites.favorites);

    return (
        <Container className="library-section py-4">
            
            {favorites.length === 0 ? (
                <h4 className="text-center text-muted">No favorites yet! Add some games. </h4>
            ) : (
                <div>
                <h2 className="text-center mb-4 library-title">Your Favorite Games 🎮</h2>
                <Row className="g-4">
                    {favorites.map((game) => (
                        <Col key={game.id} md={4} sm={6} xs={12}>
                            <GameCard game={game} />
                        </Col>
                    ))}
                </Row>
                </div>
            )}
        </Container>
    );
};

export default Library;
