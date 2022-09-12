import React from 'react';
import Main from '../components/main/main';
import Navigation from '../components/nav/nav';
import Topbar from '../components/topbar/topbar';

const Page = () => {
    return(
        <div className='page'>
            <Topbar />
            <Navigation />
            <Main />
        </div>
    )
}

export default Page;