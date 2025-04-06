import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGames } from "../store/slices/gameSlice";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import GameCard from "../components/GameCard";
import PaginationComponent from "../components/PaginationComponent";
import CarouselCards from "../components/Carousel";


function Home() {
  const dispatch = useDispatch();
  const { games, loading, error, count } = useSelector((state) => state.games);
  const filters = useSelector((state) => state.filters);  

  useEffect(() => {
    dispatch(fetchGames(filters));
  }, [dispatch, filters.currentPage, filters.category, filters.tags, filters.releaseYear, filters.popularity, filters.searchQuery]);
  
  return (
    
    <Container>
            {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          <Row>
          {filters.currentPage === 1 &&
            filters.searchQuery === "" &&
            filters.category === "" &&
            filters.tags.length === 0 &&
            filters.releaseYear === "" &&
            filters.popularity === "" && (
              <CarouselCards />
          )}

            {games.length > 0 ? (
              games.map((game) => (
                <Col key={game.id} md={4}>
                  
                  <GameCard game={game} />
                </Col>
              ))
            ) : (
              <h4>No games found matching the filters.</h4>
            )}
          </Row>
          <PaginationComponent totalCount={count} pageSize={10} />
        </>
      )}
    </Container>
  );
}

export default Home;
