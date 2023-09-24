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
          <Typography id="modal-modal-title" sx={{ mb: 2 }} variant="h2">
            준비물 챙겨요!
          </Typography>

          <div className="modal-box">
            {/* 준비물 요소들 추가 */}
            <Typography id="modal-modal-title" variant="h4">
              Text in a modal
            </Typography>

            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, mb: 2 }}
              variant="h5"
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <SupplyIcon />

            <Typography id="modal-modal-title" variant="h4">
              Text in a modal
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, mb: 2 }}
              variant="h5"
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <SupplyIcon />

            <Typography id="modal-modal-title" variant="h4">
              Text in a modal
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, mb: 2 }}
              variant="h5"
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>

            <SupplyIcon />

            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ mt: 4, mb: 2 }}
            >
              개인 상황과 일정에 따라 잘 준비하세요!
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
