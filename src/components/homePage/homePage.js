import React from 'react'
import './homePage.scss'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../../api/configApi'
import Cryptocurrencies from './../cryptocurrencies/cryptocurrencies';
import News from './../news/news';


const HomePage = () => {
    const { data, isFetching } = useGetCryptosQuery()

    const globalStats = data?.coins?.[0]
    console.log('data', data)
    console.log('globalStats', globalStats)


    if (isFetching) return 'Leading...'

    return (
        <>
            <Typography.Title level={2} className='headng'>
                Global Crypto Stats
            </Typography.Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats?.totalSupply.toPrecision(1)} /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats?.priceChange1h)} /></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats?.marketCap)} /></Col>
                <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats?.volume)} /></Col>
                <Col span={12}><Statistic title='Total Markets' value={millify(globalStats?.price)} /></Col>
            </Row>
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
            </div>
            <Cryptocurrencies simplified={true} />
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/news'>Show More</Link></Typography.Title>
            </div>
            <News simplified={true} />
        </>
    )
}

export default HomePage