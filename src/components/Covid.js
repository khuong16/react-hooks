import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from 'moment';

const Covid = () => {

    const today = moment().startOf('day').toISOString(true);;
    // trừ đi 30 ngày của ngày hôm nay
    const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);;

    const { data: dataCovid, isLoading, isError } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true)
    // tương đương
    //let dataCovid = useFetch(url).data;

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
                    {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
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

                    {isLoading === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Loading...</td>
                        </tr>
                    }

                    {isError === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Something wrong</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Covid;