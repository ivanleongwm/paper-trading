import TopSpacer from '../../../views/Header/TopSpacer'
import {useEffect,useState} from 'react';
import urlcat from "urlcat";
import {BACKEND} from "../../../utils/utils"

export default function FormDataDisplay () {
    const [userData, setUserData] = useState([]);
    console.log(BACKEND)
    useEffect(()=> {
        fetch(urlcat(BACKEND, "/api/users/"))
            .then((response) => response.json())
            .then((data) => {
                setUserData(data)
                console.log(data)
            });
    },[]);

    console.log(userData)


    return (
        <>
            <TopSpacer/>
            <div>
                Display Data
            </div>
            <div>{userData[0].username}</div>
        </>
    )
}