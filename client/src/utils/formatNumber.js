export function formatNumber(num) {
  const formatNum = Number(num)?.toLocaleString("en-US");
  return formatNum;
}
