import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/slices/FavourateSlice";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";


const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((fav) => fav.id === game.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(game.id));
    } else {
      dispatch(addFavorite(game));
    }
  };

  return (
    <Card className="game-card">
      <Link to={`/game/${game.id}`}>
        <Card.Img variant="top" className="p-2" src={game.background_image} alt={game.name} />
      </Link>
      <Card.Body>
        <div className="d-flex align-items-start justify-content-between mb-2">
          <div className="flex-grow-1 text-center">
            <Card.Title className="card-title">{game.name}</Card.Title>
          </div>
          
          <Button variant="link" onClick={handleFavorite} className="p-1">
            {isFavorite ? (
              <BookmarkIcon className="bookmark-icon" fontSize="medium" />
            ) : (
              <BookmarkBorderIcon className="bookmark-icon" fontSize="medium" />
            )}{" "}
          </Button>
        </div>

        <Card.Text className=" mb-2">
          {game.tags?.slice(0, 5).map((tag) => (
            <Badge key={tag.id} bg="secondary">
              {tag.name || "No Tag"}
            </Badge>
          ))}
        </Card.Text>

        <Card.Text className="d-flex justify-content-between align-items-center px-3 py-2 genre-rating-section">
            <div className="d-flex align-items-center genre-text ms-2">
            <SportsEsportsIcon fontSize="medium"/>
            <span>{game.genres?.map((genre) => genre.name).join(",") || "No Category"}</span>
            </div>
          
          <div className="vr mx-3 divider-line" 
          style={{height:'1.8rem',opacity:'0.3'}}
          ></div>
           
           <div className="d-flex align-items-center rating-text me-2">
            ⭐{game.rating} </div>
        </Card.Text>

        <div className="text-center mt-3">
        <button className="card-btn">
          <Link to={`/game/${game.id}`}>See Details</Link>
        </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
