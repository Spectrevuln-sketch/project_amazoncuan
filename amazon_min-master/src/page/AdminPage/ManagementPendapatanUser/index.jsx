import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { TableUserPendapatan } from '../../../components';

const ManagementPendapatanUser = () => {
  const [tab, setTab] = useState(false);
  const [content, setContent] = useState();


  const ActiveTab = async (num) => {
    setTab(num);

  }



  return (
    <>
      <div className="row g-3 mt-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-2 text-uppercase">Management Pendapatan User</h1>
        </div>
      </div>{/*//row*/}
      <nav id="orders-table-tab" className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4">
        <span style={{ cursor: "pointer" }} className={tab === false || tab === 1 ? "flex-sm-fill text-sm-center nav-link active" : "flex-sm-fill text-sm-center nav-link"} id="orders-all-tab" data-bs-toggle="tab" href="#orders-all" role="tab" aria-controls="orders-all" aria-selected="true" onClick={() => ActiveTab(false)}>User Request</span>
        <span style={{ cursor: "pointer" }} className="flex-sm-fill text-sm-center nav-link" id="orders-pending-tab" data-bs-toggle="tab" href="#orders-pending" role="tab" aria-controls="orders-pending" aria-selected="false">Berhasil</span>
        <a className="flex-sm-fill text-sm-center nav-link" id="orders-cancelled-tab" data-bs-toggle="tab" href="#orders-cancelled" role="tab" aria-controls="orders-cancelled" aria-selected="false">Cancelled</a>
      </nav>
      {/* Show DAta */}

      <TableUserPendapatan tab={tab} />
    </>
  )

}

export default ManagementPendapatanUser
