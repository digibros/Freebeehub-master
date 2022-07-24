import React from "react";
import "../../css/modal.css";
import ClearIcon from "@mui/icons-material/Clear";
function ModalOverlay({ children, close }) {
  return <div className="ModalOverlay">{children}</div>;
}

export default ModalOverlay;
