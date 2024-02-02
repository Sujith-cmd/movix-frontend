import React, { useState, useEffect } from "react";

import "./styles.scss"
import { useSelector } from "react-redux";

const BookingDetails = ({setDetails,setDetailsValue}) => {
  

  const { bookingDetails } = useSelector((state) => state.home);



   //,marginBottom:"1rem"
    return (
        <div className="outer">
          <div style={{height:"30px",display:"flex",justifyContent:"end"}}>
            <span style={{backgroundColor:"grey",alignSelf:"center",padding:"10px",borderRadius:"10px",marginTop:"10px",marginRight:"3px",cursor:"pointer"}} onClick={()=>{setDetails(false);setDetailsValue({})}}>Close</span>
          </div>
          <div style={{display:"flex",width:"100%",marginTop:"1rem"}}>
           <span style={{justifyContent:"space-between",color:"white",fontWeight:"600",fontSize:"4rem"}}>Booking Details</span>
          </div>
          <div style={{width:"100%",height:"4px",backgroundColor:"white",marginBottom:"1rem",marginTop:"1rem"}}></div>
          <div style={{display:"flex",height:"50px",width:"100%",fontSize:"2rem",color:"white",marginRight:"2rem"}}>
            <span style={{width:"36%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>Username</span>
            <span style={{width:"64%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>{bookingDetails?.username}</span>
          </div>
          <div style={{display:"flex",height:"50px",width:"100%",fontSize:"2rem",color:"white",marginRight:"2rem"}}>
            <span style={{width:"36%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>Theatre Name</span>
            <span style={{width:"64%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>{bookingDetails?.theatreName}</span>
          </div>
          <div style={{display:"flex",height:"50px",width:"100%",fontSize:"2rem",color:"white",marginRight:"2rem"}}>
            <span style={{width:"36%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>Date</span>
            <span style={{width:"64%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>{bookingDetails?.date}</span>
          </div>
          <div style={{display:"flex",height:"50px",width:"100%",fontSize:"2rem",color:"white",marginRight:"2rem"}}>
            <span style={{width:"36%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>Cost Per Hour</span>
            <span style={{width:"64%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>{bookingDetails?.costPerHour}</span>
          </div>
          <div style={{display:"flex",height:"50px",width:"100%",fontSize:"2rem",color:"white",marginRight:"2rem"}}>
            <span style={{width:"36%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>Booking Id</span>
            <span style={{width:"64%",fontSize:"1.2rem",color:"white",marginRight:"2rem",overflowX:"scroll"}}>{bookingDetails?.bookingId}</span>
          </div>
          <div style={{display:"flex",height:"50px",width:"100%",fontSize:"2rem",color:"white",marginRight:"2rem"}}>
            <span style={{width:"36%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>Total Amount</span>
            <span style={{width:"64%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>{bookingDetails?.bill}</span>
          </div>
          <div style={{display:"flex",height:"50px",width:"100%",fontSize:"2rem",color:"white",marginRight:"2rem"}}>
            <span style={{width:"36%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>Time Slots</span>
            <span style={{width:"64%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}> {bookingDetails?.slots?.map((t) => (
                                                      `${t}.00-${t+1}.00 ,`
                                                    ))}</span>
          </div>
          {bookingDetails?.wallet?(<div style={{display:"flex",height:"50px",width:"100%",fontSize:"2rem",color:"white",marginRight:"2rem"}}>
            <span style={{width:"36%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>Wallet</span>
            <span style={{width:"64%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>{"true"}</span>
          </div>):(<div style={{display:"flex",height:"50px",width:"100%",fontSize:"2rem",color:"white",marginRight:"2rem"}}>
            <span style={{width:"36%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>Paid online</span>
            <span style={{width:"64%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>{"true"}</span>
          </div>)}
          {/* <span style={{display:"flex"}}>{book?.bookedEatings?.map((eat,index)=>{
                              return(
                                <div style={{display:"flex",gap:"1rem"}} key={index}>
                                  <div style={{color:"white"}}>Item :{eat.item}</div>
                                  <div style={{color:"white"}}>Qnty :{eat.quantity}</div>
                                  <div style={{color:"white"}}>Price :{eat.price}</div>
                                </div>
                              )
                            })}</span> */}/
                            <div style={{display:"flex",height:"50px",width:"100%",fontSize:"2rem",color:"white",marginRight:"2rem"}}>
            <span style={{width:"36%",fontSize:"1.2rem",color:"white",marginRight:"2rem"}}>Eatables</span>
            <span style={{width:"64%",fontSize:"1.2rem",color:"white",marginRight:"2rem",overflowX:"scroll",overflowY:"scroll"}}><span style={{display:"flex"}}>{bookingDetails?.bookedEatings?.map((eat,index)=>{
                              return(
                                <div style={{display:"flex",gap:"1rem"}} key={index}>
                                  <div style={{color:"white"}}>Item :{eat.item}</div>
                                  <div style={{color:"white"}}>Qnty :{eat.quantity}</div>
                                  <div style={{color:"white"}}>Price :{eat.price}</div>
                                </div>
                              )
                            })}</span></span>
          </div>
        </div>
    );
};

export default BookingDetails;