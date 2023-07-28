import React from "react";
import { Link, useParams } from "react-router-dom";

function Thanks() {
  const { id } = useParams();
  return <div>Thanks</div>;
}

export default Thanks;
