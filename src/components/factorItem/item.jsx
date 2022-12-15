import { NumberFormatBase } from 'react-number-format';

const FactorItem = () => {
  const _format = (val) => {
   
    return val.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-1">
        <span className='font-vazir'>تومان</span>
        <NumberFormatBase thousandSeparator="," format={_format} className='font-vazir'  displayType="text" value={'12314432'} />
      </div>
      <div className='flex flex-col'>

      </div>
    </div>
  )
}

export default FactorItem