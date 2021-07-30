import React, {useState, useEffect} from 'react';
import Spinner from './../spinner/spinner';

const withData = (View) => {   
    return (props) => {
        const {getData} = props;

        const [data, setData] = useState([])

        useEffect(() => {
            getData()
                .then(data => {
                    setData(data);
                })
        }, [])


        if (!data) {
            return <Spinner/>
        }

        return <View {...props} data={data}/>
    }

}


export default withData;