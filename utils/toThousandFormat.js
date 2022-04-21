export default function toThousandFormat(num) {
    if (num !== null) {
      let num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return num_parts.join(",");
    }
    return "0";
  }
  