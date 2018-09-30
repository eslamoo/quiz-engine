import React from 'react';
import Clients from '../clients/Clients';
import Sidebar from '../layout/Sidebar';
import AppNavbar from './AppNavbar';
export default () => {
  return (
    <div>
      <AppNavbar />
      <div className='row'>
        <div className=''>
          <Sidebar />
        </div>
        <div className='content-wrapper col-md-10'>
          <div className='container-fluid'>
      
            <Clients />
          </div>
        </div>
      </div>
     
    </div>
  );
};
