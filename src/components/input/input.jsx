import { NumericFormat } from 'react-number-format';


const Input = ({text}) => {
    return (
        <div className='flex items-center'>
            <span className='bg-[#EEEEEE] border rounded-r-none py-2 w-24 text-center rounded-md'>{text}</span>
            <NumericFormat thousandSeparator={true} type="text" className='border text-right w-full outline-none rounded-l-none p-2 rounded-md' />
        </div>
    )
}

export default Input