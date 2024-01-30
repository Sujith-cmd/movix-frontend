import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";

const MovieCard = ({ data}) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;
    return (
        <div
            className="movieCard"
            onClick={() =>
                navigate(`/vendor/${data._id}`)
            }
        >
            <div className="posterBlock">
                <Img className="posterImg" src={data.thumbnailPic ||PosterFallback} />
                {/* {!fromSearch && (
                    <React.Fragment>
                        <CircleRating rating={data.vote_average.toFixed(1)} />
                        <Genres data={data.genre_ids.slice(0, 2)} />
                    </React.Fragment>
                )} */}
            </div>
            <div className="textBlock">
                <span className="title">{data.username}</span>
                {/* <span className="date">
                    {dayjs(data.release_date).format("MMM D, YYYY")}
                </span> */}
            </div>
        </div>
    );
};

export default MovieCard;
