import axios from 'axios'
import {useEffect} from 'react'

export default function TestComponent() {

    useEffect(() => {
        axios.get("https://open.faceit.com/data/v4/players/992ec076-71ce-494f-b470-0784c732e205/history?game=csgo&offset=0&limit=20", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((result) => {
            console.log(result.data)
        }
        )
        .catch((error) => {
            console.log(error)
        })
    })

    return (
        <div>kek</div>
    )
}