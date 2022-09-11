import React from 'react';
import Main from '../components/main/main';
import Sidebar from '../components/sidebar/sidebar';
import Topbar from '../components/topbar/topbar';

const Page = () => {
    return(
        <div className='page'>
            <Topbar />
            <Sidebar />
            <Main />
        </div>
    )
}

export default Page;