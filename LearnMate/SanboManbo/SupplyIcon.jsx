import * as React from "react";
import "../styles/style.scss";
import "../styles/__root.scss";
import "../styles/supply.scss";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function SupplyIcon() {
  return (
    <>
      <div className="modal-supplies">
        <div className="modal-supply">
          <Fab
            disabled
            aria-label="like"
            style={{ width: "120px", height: "120px" }}
          >
            <FavoriteIcon style={{ fontSize: "60px" }} />
          </Fab>
          <h6 style={{ marginTop: "2rem" }}>준비물1</h6>
        </div>
        <div className="modal-supply">
          <Fab
            disabled
            aria-label="like"
            style={{ width: "120px", height: "120px" }}
          >
            <FavoriteIcon style={{ fontSize: "60px" }} />
          </Fab>
          <h6 style={{ marginTop: "2rem" }}>준비물2</h6>
        </div>
        <div className="modal-supply">
          <Fab
            disabled
            aria-label="like"
            style={{ width: "120px", height: "120px" }}
          >
            <FavoriteIcon style={{ fontSize: "60px" }} />
          </Fab>
          <h6 style={{ marginTop: "2rem" }}>준비물3</h6>
        </div>
        <div className="modal-supply">
          <Fab
            disabled
            aria-label="like"
            style={{ width: "120px", height: "120px" }}
          >
            <FavoriteIcon style={{ fontSize: "60px" }} />
          </Fab>
          <h6 style={{ marginTop: "2rem" }}>준비물4</h6>
        </div>
      </div>

      <hr style={{ marginTop: "4rem" }} />
    </>
  );
}
