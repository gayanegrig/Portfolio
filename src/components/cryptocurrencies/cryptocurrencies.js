import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../../api/configApi';

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100
    const { data: crytposList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState([])
    const [searchCrypto, setSearchCrypto] = useState('')

    useEffect(() => {
        const filteredData = crytposList?.coins.filter((coin) => coin.name.toLowerCase().includes(searchCrypto.toLowerCase()))

        setCryptos(filteredData)
    }, [crytposList, searchCrypto])

    if (isFetching) return 'Loading...'

    return (
        <>
            {!simplified && (
                <div className='search-crypto'>
                    <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchCrypto(e.target.value)} />

                </div>
            )}
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}.${currency.name}`}
                                extra={<img className='cryto-image' src={currency.icon} />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.priceChange1d)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}

            </Row>

        </>
    )
}

export default Cryptocurrencies