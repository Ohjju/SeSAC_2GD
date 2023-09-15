import * as React from "react";
import "../styles/style.scss";
import "../styles/__root.scss";
import "../styles/supply.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SupplyIcon from "./SupplyIcon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  //padding은 p
  p: 5,
  pt: 10,
  pb: 10,
};

export default function Supply() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>준비물 모달창</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="h6">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

          {/* 준비물 요소들 추가 */}
          <SupplyIcon />
          <SupplyIcon />
        </Box>
      </Modal>
    </div>
  );
}
