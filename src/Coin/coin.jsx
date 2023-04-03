import { useState } from "react";
import { useEffect } from "react";


const Coins = () => {

    let [values, setData] = useState([])
    useEffect(() => {


        let rank = async () => {

            let resource = await fetch('http://api.coinranking.com/v2/coins')

            let set = await resource.json()
            setData(set.data.Coins)

        }
        rank()



    })


    return (<div>
        <h1>hi</h1>
        {

            
                values.map((data) => {

                    return (
                        <div>
                           <h1>{data.symbol}</h1>

                        </div>
                    )
                })
           
        }




    </div>);
}

export default Coins;