import { useEffect } from "react";
import { useContext, useState } from "react";
import { FactorCnotext } from "../../contexts/factor/factor-context";
import FactorItem from "../factorItem/item";

const Factor = () => {
  const { pTala, maliat, ezafi, wTala, profit, ojrat } = useContext(FactorCnotext);
  const [finalPrice, setFinalPrice] = useState(0);
  const [goldPrice, setGoldPrice] = useState(0);
  const [ojratPrice, setOjratPrice] = useState(0);
  const [profitPrice, setProfitPrice] = useState(0);
  const [maliatPrice, setMaliatPrice] = useState(0);
  useEffect(() => {
    setGoldPrice(wTala * pTala);
    setOjratPrice(wTala * ((ojrat * pTala) / 100));
    setProfitPrice((goldPrice + ojratPrice) * (profit / 100));
    setMaliatPrice(((profitPrice + ojratPrice) * (maliat / 100)));
    setFinalPrice(goldPrice + ojratPrice + profitPrice + maliatPrice + ezafi);
  }, [
    finalPrice,
    goldPrice,
    ojratPrice,
    profitPrice,
    maliatPrice,
    pTala,
    maliat,
    ezafi,
    wTala,
    profit,
    ojrat,
  ]);
  return (
    <div className="flex flex-col  space-y-4 p-4  bg-[#243B55] rounded-lg">
      <FactorItem
        title={": قیمت نهایی محصول"}
        value={finalPrice}
        details={"قیمت طلا + اجرت ساخت + سود + مالیات"}
      />
      <hr className="rounded-md border-[#e0e0e0]" />
      <FactorItem
        title={": قیمت طلای محصول"}
        value={goldPrice}
        details={"وزن * نرخ روز طلا"}
      />
      <hr className="rounded-md border-[#e0e0e0]" />

      <FactorItem
        title={": اجرت ساخت"}
        value={ojratPrice}
        details={"قیمت طلا * اجرت ساخت"}
      />
      <hr className="rounded-md border-[#e0e0e0]" />
      <FactorItem
        title={": سود فروش طلا"}
        value={profitPrice}
        details={"سود فروش * (قیمت طلا + اجرت ساخت)"}
      />
      <hr className="rounded-md border-[#e0e0e0]" />

      <FactorItem
        title={": مالیات"}
        value={maliatPrice}
        details={"(سود فروش طلا + اجرت ساخت) * مالیات"}
      />
    </div>
  );
};

export default Factor;
