import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

// bắt buộc phải có từ khóa 'use', truyền vào url
const useFetch = (url) => {

    const [data, setData] = useState([]);
    // set trạng thái isLoading data.
    const [isLoading, setIsLoading] = useState(true);

    const [isError, setIsError] = useState(false);


    // tương đương với componentDidMount
    // có dependencies.
    useEffect(async () => {
        try {
            async function fetchData() {
                let res = await axios.get(url);
                let data = res && res.data ? res.data : [];

                if (data && data.length > 0) {
                    data.map(item => {
                        // formate ngày tháng từ string -> ngày tháng năm
                        item.Date = moment(item.Date).format('DD/MM/YYYY')
                        return item;
                    })

                    data = data.reverse();
                }
                setData(data);
                setIsLoading(false);
                setIsError(false);
            }
            fetchData();
        } catch (e) {
            setIsError(true);
            setIsLoading(false);
            alert(e);
        }
        // khi component đc load thì mới đc load url.
    }, []);


    // nhả ra data cần.
    return {
        data, isLoading, isError
    }
}

export default useFetch;