import { NumberFormatBase } from "react-number-format";

const FactorItem = ({ title, details , value }) => {
  const _format = (val) => {
    
    let val1 = val.substring(0,9).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return val1.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-1">
        <span className="font-vazir lg:text-lg text-[#e0e0e0]">تومان</span>
        <NumberFormatBase
          format={_format}
          
          className="font-vazir text-lg lg:text-xl text-white"
          displayType="text"
          value={Math.round(value)}
        />
      </div>
      <div className="flex flex-col items-end space-y-1  justify-center">
        <span className="font-vazir text-white text-center lg:text-xl">{title}</span>
        <span className="font-vazir text-[#e0e0e0] text-xs lg:text-sm text-right">
          {details}
        </span>
      </div>
    </div>
  );
};

export default FactorItem;
