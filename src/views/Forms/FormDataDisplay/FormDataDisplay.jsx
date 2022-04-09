import TopSpacer from '../../../views/Header/TopSpacer'
import {useEffect,useState} from 'react';
import urlcat from "urlcat";
import {BACKEND} from "../../../utils/utils"

export default function FormDataDisplay () {
    const [userData, setUserData] = useState([]);

    useEffect(()=> {
        fetch(urlcat(BACKEND, "/api/Users/"))
            .then((response) => response.json())
            .then((data) => setUserData(data));
    },[]);

    console.log(userData)


    return (
        <>
            <TopSpacer/>
            <div>
                Display Data
            </div>
            <div>{userData}</div>
        </>
    )
}