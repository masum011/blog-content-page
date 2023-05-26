import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function EmpCard({ photo, name }) {
  return (
    <>
      <div className="card-div w-96">
        <img src={photo} alt="aston" />
        <b>{name}</b>
        <p>Position</p>
        <div className="social-media-icon">
          <TwitterIcon color="primary" sx={{ marginRight: "1rem" }} />
          <InstagramIcon color="primary" />
        </div>
      </div>
    </>
  );
}
