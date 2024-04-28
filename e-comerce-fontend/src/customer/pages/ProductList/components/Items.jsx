import React from "react";
import PropTypes from "prop-types";
import { Box, Skeleton, Typography } from "@mui/material";
import { BASEURLHOST, THUMBNAIL_PLACEHOLDER } from "../../../../constants";
import { useNavigate } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const navigate = useNavigate();
  const thumbnailUrl = product.thumbnail
    ? `${BASEURLHOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Box padding={1} onClick={handleProductClick}>
      <img src={thumbnailUrl} alt={product.name} width="100%" height="213" />
      <Skeleton />
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
        </Box>
        <Box
          component="span"
          fontSize="13px"
          fontWeight="bold"
          mr={1}
          color="red"
        >
          {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ""}
        </Box>
      </Typography>
    </Box>
  );
}

export default Product;