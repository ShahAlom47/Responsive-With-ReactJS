import axios from "axios";
import { useEffect, useState } from "react";
import PrintCard from "./PrintCard";


const PriceOption = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {

        axios.get('pricingData.json')
            .then(data => setDatas(data.data.pricingOptions))
    }, [])


    return (
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 my-10 p-5">
            {
                datas.map((data => <PrintCard data={data} key={data.id}></PrintCard>))
            }
        </div>


    );
};

export default PriceOption;