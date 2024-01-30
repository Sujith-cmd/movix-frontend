import React from "react";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch, { useFetchGet } from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRatingDetails";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailsBanner = ({ id,vendorData}) => {
   
    // const { data,loading } = useFetchGet(`/vendors/getDetails/${id}`);
   
    // const { id } = useParams();
   
   const [data, setData] = useState([])
   const [genresData, setGenreData] = useState([])
   const [loading, setLoading] = useState(true)
    
    const { url } = useSelector((state) => state.home);

   
useEffect(() => {
    // console.log("vendorDaaata");
    // console.log(vendorData);
    if(vendorData){

        setData(vendorData)
        setLoading(false)
    }else{
        setLoading(true)
    }
    const genreDet=vendorData?.features?.map((m)=>{
        return m.featureName
    })
    // console.log("genreData");
    // console.log(genreDet);
    setGenreData(genreDet)
}, [vendorData])
   
useEffect(() => {
//    console.log("data");
//    console.log(data);
}, [data])
    


    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <React.Fragment>
                            <div className="backdrop-img">
                                <Img src={data.thumbnailPic} />
                            </div>
                            <div className="opacity-layer"></div>
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                        {data.thumbnailPic ? (
                                            <Img
                                                className="posterImg"
                                                src={data.thumbnailPic}
                                            />
                                        ) : (
                                            <Img
                                                className="posterImg"
                                                src={PosterFallback}
                                            />
                                        )}
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            {`${
                                                data.username
                                            } `}
                                        </div>
                                        <div className="subtitle">
                                            {data.isTheatre? "Home Theatre":"Game Station"}
                                        </div>

                                        <Genres data={genresData||["4k TV","Dolby Atmos","Central AC"]} />

                                        <div className="row">
                                            <CircleRating
                                                rating={data.noOfRatings}
                                            />
                                           
                                        </div>

                                        <div className="overview">
                                            <div className="heading">
                                                Overview
                                            </div>
                                            <div className="description">
                                                {data?.address?.remark||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem voluptatibus deserunt error vero delectus nisi, fugiat, velit est placeat laborum autem earum explicabo impedit iure. Cum alias aliquam qui dolorem, quae reru!"}
                                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem voluptatibus deserunt error vero delectus nisi, fugiat, velit est placeat laborum autem earum explicabo impedit iure. Cum alias aliquam qui dolorem, quae reru! */}
                                            </div>
                                        </div>

                                        <div className="info">
                                            
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Price:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {data.price}
                                                    </span>
                                                </div>
                                            
                                           
                                           
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                        Available Seats:{" "}
                                                    </span>
                                                    <span className="text">
                                                        {vendorData?.seatingCapacity}
                                                    </span>
                                                </div>
                                            
                                        </div>

                                      
                                            <div className="info">
                                                <span className="text bold">
                                                    Address:{" "}
                                                </span>
                                                <span className="text">
                                                    {vendorData?.address?.addresslineOne},{vendorData?.address?.addresslineTwo},{vendorData?.address?.district},{vendorData?.address?.state}
                                                </span>
                                            </div>
                                        

                                        
                                            <div className="info">
                                                <span className="text bold">
                                                    Available timings:{" "}
                                                </span>
                                                <span className="text">
                                                    {data?.timeSlots?.map((t) => (
                                                      `${t}AM ,`
                                                    ))}
                                                  </span>
                                                  
                                            </div>
                                     

                                        
                                    </div>
                                </div>
                                
                            </ContentWrapper>
                        </React.Fragment>
                    )}
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;
