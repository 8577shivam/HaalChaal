import React from "react";
import "../spinner.css"

export default function LoadingSpinner() {
  return (
    <div className="spinner-container" style={{position:"absolute",left:"50%",right:"50%"}}>
      <div className="loading-spinner"></div>
    </div>
  );
}
