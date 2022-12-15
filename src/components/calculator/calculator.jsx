import Input from "../input/input"
import Factor from "../factor/factor"
const Calculator = () => {
    return (
        <>
            <div className='flex flex-col space-y-3 m-auto min-w-full'>
                <span className="text-right">
                    محاسبه قیمت طلا
                </span>
                <div className='flex flex-col space-y-6 p-4 bg-white drop-shadow-lg'>
                    <div className="flex items-center space-x-6 justify-between">
                        <div className='flex flex-col space-y-2 justify-end'>
                            <span className="text-right">
                                : نرخ روز طلا
                            </span>
                            <Input text={'تومان'} />
                        </div>
                        <div className='flex flex-col space-y-2 justify-end'>
                            <span className="text-right">
                                : مالیات
                            </span>
                            <Input text={'%'} />
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 justify-between">
                        <div className="flex flex-col space-y-2 justify-end">
                            <span className="text-right">
                                : ملحقات
                            </span>
                            <Input text={'تومان'} />
                        </div>
                        <div className="flex flex-col space-y-2 justify-end">
                            <span className="text-right">
                                : وزن خالص طلا
                            </span>
                            <Input text={'گرم'} />
                        </div>
                    </div>

                    <div className="flex items-center space-x-6 justify-between">
                        <div className="flex flex-col space-y-2 justify-end">
                            <span className="text-right">
                                : سود فروش
                            </span>
                            <Input text={'%'} />
                        </div>
                        <div className="flex flex-col space-y-2 justify-end">
                            <span className="text-right">
                                : اجرت ساخت
                            </span>
                            <Input text={'%'} />
                        </div>
                    </div>
                    <Factor/>
                </div>
            </div>
        </>
    )
}

export default Calculator