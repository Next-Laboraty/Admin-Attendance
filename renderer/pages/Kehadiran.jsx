import React, { useEffect, useState } from 'react'
import AxiosGet from '../api/AxiosGet'
import moment from 'moment'
import { Card, Col, Row, Spin } from 'antd'

export default function Kehadiran() {
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    useEffect(() => {
        processor()
    }, [])
    const processor = () => {
        AxiosGet(`dateAttendance/get`, date).then(res => {
            setLoading(false)
            let lists = []
            for(let i=0; i<res.data.length; i++) {
                lists.push(
                    {
                        name: res.data[i].name
                    }
                )
            }
            console.log(lists)
        }).catch(err => console.log(err))
    }

    if (loading) {
        return (
            <>
                <style jsx>{`
                    .setloadingvalue {
                        margin: 20px 0;
                        margin-bottom: 20px;
                        padding: 30px 50px;
                        text-align: center;
                        height:100%;
                        width:100%;
                        background: rgba(0, 0, 0, 0.05);
                        border-radius: 4px;
                }
                `}
                </style>
                <div className="setloadingvalue">
                    <Spin />
                </div>
            </>
        )
    }
    else {
        return (
            <div>
                <div className="site-card-wrapper">
                    <Row gutter={'16'} style={{ marginTop: 20 }}>
                        {/* {
                            list.map(item =>
                                <Col span={'12'}>
                                    <Card title={item.employee_name}>
                                        <Card type="inner" title={item.log_type} extra={<a href="#">Cek Lokasi</a>}>
                                            Inner Card content
                                        </Card>
                                    </Card>
                                </Col>
                            )
                        } */}
                    </Row>
                </div>
            </div>
        )
    }
}