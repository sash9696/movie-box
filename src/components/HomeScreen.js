import React,{ useState } from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import { rowData } from './rowData';

function HomeScreen() {

    const [search, setSearch] = useState('');

    return (
        <div className='home_screen'>
            <Nav search={search} setSearch={setSearch} />
            <Banner />
            {rowData.map(val => (
                 <Row 
                    title={val.title} 
                    fetchUrl={val.fetchUrl} 
                    isLargeRow={val.isLargeRow ? "true" : false}
                    search={search}
                    setSearch={setSearch}
                />
            ))}
        </div>
    )
}

export default HomeScreen
