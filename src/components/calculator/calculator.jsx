import Input from "../input/input";
import Factor from "../factor/factor";
import { useContext } from "react";
import { FactorCnotext } from "../../contexts/factor/factor-context";

const Calculator = () => {
  const { pTala ,
    setPTala,
    maliat,
    setMaliat,
    ezafi,
    setEzafi,
    wTala,
    setWTala,
    profit,
    setProfit,
    ojrat,
    setOjrat} = useContext(FactorCnotext)
  return (
    <>
      <div className="flex flex-col space-y-3 py-8 m-auto min-w-full">
        <span className="text-right font-vazir font-semibold text-white text-2xl">
          محاسبه قیمت طلا
        </span>
        <div className="flex flex-col space-y-3 p-4 rounded-lg bg-white drop-shadow-lg">
          <div className="flex flex-col space-y-2 justify-end">
            <span className="text-right font-vazir text-lg">: نرخ روز طلا</span>
            <Input value={pTala}  setValue={setPTala} text={"تومان"} />
          </div>
          <div className="flex flex-col space-y-2 justify-end">
            <span className="text-right font-vazir text-lg">: مالیات</span>
            <Input text={"%"} value={maliat} setValue={setMaliat} />
          </div>
          <div className="flex flex-col space-y-2 justify-end">
            <span className="text-right font-vazir text-lg">: ملحقات</span>
            <Input text={"تومان"} value={ezafi} setValue={setEzafi} />
          </div>
          <div className="flex flex-col space-y-2 justify-end">
            <span className="text-right font-vazir text-lg">
              : وزن خالص طلا
            </span>
            <Input text={"گرم"} value={wTala} setValue={setWTala} />
          </div>

          <div className="flex flex-col space-y-2 justify-end">
            <span className="text-right font-vazir text-lg">: سود فروش</span>
            <Input text={"%"} value={profit} setValue={setProfit} />
          </div>
          <div className="flex flex-col space-y-2 justify-end">
            <span className="text-right font-vazir text-lg">: اجرت ساخت</span>
            <Input text={"%"} value={ojrat} setValue={setOjrat}/>
          </div>
          <div className="py-3">
            <Factor />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
