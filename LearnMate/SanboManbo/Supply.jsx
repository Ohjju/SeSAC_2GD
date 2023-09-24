import * as React from "react";
import "../styles/style.scss";
import "../styles/__root.scss";
import "../styles/supply.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SupplyIcon from "./SupplyIcon";

export default function Supply() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <div className="modal-button"></div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-body">
          <Typography
            id="modal-modal-title"
            variant="h2"
            sx={{ mb: 2 }}
            style={{ fontWeight: "700" }}
          >
            준비물 챙겨요👍
          </Typography>

          <div className="modal-box">
            {/* 준비물 요소들 추가 */}
            <Typography
              id="modal-modal-title"
              sx={{ mt: 4 }}
              style={{ fontWeight: "700", fontSize: "2.5rem" }}
            >
              트레킹갈 때 필수!
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, mb: 2 }}
              variant="h5"
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>

            <SupplyIcon
              supply1={"물통"}
              supply2={"모자"}
              supply3={"운동화"}
              supply4={"가벼운 배낭"}
            />
            <Typography
              id="modal-modal-title"
              sx={{ mt: 4 }}
              style={{ fontWeight: "700", fontSize: "2.5rem" }}
            >
              챙기면 좋아요~
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, mb: 2 }}
              variant="h5"
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <SupplyIcon
              supply1={"스틱"}
              supply2={"비닐봉지"}
              supply3={"우산, 우비"}
              supply4={"비상약"}
            />
            <Typography
              id="modal-modal-title"
              sx={{ mt: 4 }}
              style={{ fontWeight: "700", fontSize: "2.5rem" }}
            >
              장기 트레킹을 간다면?
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, mb: 2 }}
              variant="h5"
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <SupplyIcon
              supply1={"숙박"}
              supply2={"여벌 옷"}
              supply3={"세면 도구"}
              supply4={"휴지, 물티슈"}
            />
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ mt: 4, mb: 2 }}
              style={{ fontSize: "1.8rem", fontWeight: "500" }}
            >
              개인 상황과 일정에 따라 잘 준비하세요!
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
