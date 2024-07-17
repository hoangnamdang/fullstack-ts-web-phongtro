export const getStringToPrice = (str: string) => {
    if (!str) return 0;
    const [price, txtPrice] = str.split(" ");
    if (txtPrice === "triệu/tháng") {
      const million = 1000000;
      return Number(price) * million;
    }
    const formatPrice = price.replace(".", "");
    return Number(formatPrice);
  };
  
  export const getAcreage = (str: string) => {
    if (!str) return 0;
    const acreage = str.slice(0, -2);
    return Number(acreage);
  };
  

export const hasValue = (value: string | undefined) => {
  if(value && value !== undefined && value !== "") {
    return true;
  }
  return false
}