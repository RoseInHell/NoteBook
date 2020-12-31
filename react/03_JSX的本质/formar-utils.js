function formatPrice(price) {
  if (typeof price !== Number) {
    price = Number(price) || 0
  }
  return "￥" + price.toFixed(2);
}