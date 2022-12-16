import { NumericFormat } from 'react-number-format';


const Input = ({text , value ,  setValue}) => {
   const onChangeHanle =(e) =>{
        let a = parseFloat(e)
        setValue(a)
   }
    return (
        <div className='flex items-center '>
            <span className='bg-[#243B55] border rounded-r-none py-2 w-28 text-center rounded-md border-r-0 text-white font-vazir text-lg '>{text}</span>
            <NumericFormat onChange={(e)=>onChangeHanle(e.target.value)}  value={value}   type="text" className='border  text-right border-l-0 w-full outline-none rounded-l-none p-2 rounded-md text-lg' />
        </div>
    )
}

export default Input