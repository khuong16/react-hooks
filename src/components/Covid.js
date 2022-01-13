import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);
    // set trạng thái loading data.
    const [loading, setLoading] = useState(true);

    // tương đương với componentDidMount
    // có dependencies.
    useEffect(async () => {
        setTimeout(async () => {
            let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
            let data = res && res.data ? res.data : [];

            // let data = null;
            // if(res && res.data){
            //     data = res.data;
            // }else{
            //     data = [];
            // }

            if (data && data.length > 0) {
                data.map(item => {
                    // formate ngày tháng từ string -> ngày tháng năm
                    item.Date = moment(item.Date).format('DD/MM/YYYY')
                    return item;
                })

                data = data.reverse();
            }
            setDataCovid(data);
            setLoading(false);

        }, 2000);

    }, []);
    //let x = 10;

    return (
        <>
            <h3>Covid 19 tracking in VietNam:</h3>
            {/* {
                x > 5 ? <span>I'm greater than 5</span> : <span>I'm less than 5</span>
            } */}
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {loading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }

                    {loading === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Loading...</td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )
}

export default Covid;