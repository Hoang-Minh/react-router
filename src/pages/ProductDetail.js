import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <div>ProductDetail</div>
      <p>{params.productId}</p>
      <Link to=".." relative="path">Back</Link>
    </>
  );
};

export default ProductDetail;
