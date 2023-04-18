import React from "react";
import Link from "next/link";

function PersonTile({ personName }) {
  const personStyles = {
    border: "2px solid green",
    borderRadius: 10,
    padding: 10,
    maxWidth: 100,
    backgroundColor: "bisque",
    textAlign: "center",
    display: "flex",
    justifyContet: "center",
    alignItems: "center",
    textTransform: "capitalize",
  };

  return (
    <Link href={`/persons/${personName}`}>
      <div style={personStyles}>
        <i
          style={{ padding: 0 }}
          class="fa fa-user-circle-o"
          aria-hidden="true"
        ></i>
        {personName}
      </div>
    </Link>
  );
}

export default PersonTile;
