import React from "react";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

export function AddTextBtn(props) {
  return (
    <Button
      type="submit"
      {...props}
      variant="outlined"
      size="large"
      style={{ marginBottom: "2em" }}
    >
      {props.children}
    </Button>
  );
}
function handleClick(e) {
  e.preventDefault();
  let amount = document.getElementsByName("Donation")[0].value;
  if (!isNaN(amount)) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/donation", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ amount: amount }));
  }
}

export function DonateBtn() {
  return (
    <a className="button" href="/donate" role="button" onClick={handleClick}>
      Donate Now!
    </a>
  );
}

export function DownloadBtn({ process }) {
  return (
    <Button
      size="medium"
      variant="outlined"
      // color="default"
      startIcon={<CloudDownloadIcon />}
    >
      <a
        className="bttn"
        href={process}
        download="penguin_meme.jpg"
        role="button"
      >
        Download
      </a>
    </Button>
  );
}
