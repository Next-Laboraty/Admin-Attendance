import axios from "axios";
export default function AxiosGet(url,date) {
    const request = axios.post(`https://chilly-panda-26.telebit.io/` + url,
        {
            server: 'b25nbGFpLmlk',
            token: 'MTY0MWRlMGM0YzdjMTAzOjI0MWU0MzNlMDk2MjgwMw==',
            today: date
        },
        {
            headers: {
                headers: {
                    'Content-Type': `application/json`,
                }
            }
        })

    return request
}