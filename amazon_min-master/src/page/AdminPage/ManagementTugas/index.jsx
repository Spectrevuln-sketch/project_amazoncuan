import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { TugasData } from '../../../components';

const ManagementTugas = () => {
  const [tab, setTab] = useState(false);
  const [content, setContent] = useState();


  const ActiveTab = async (num) => {
    setTab(num);

  }



  return (
    <>
      <div className="row g-3 mt-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-2 text-uppercase">Management Tugas</h1>
        </div>
      </div>{/*//row*/}
      <nav id="orders-table-tab" className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4">
        <span style={{ cursor: "pointer" }} className={tab === false || tab === 1 ? "flex-sm-fill text-sm-center nav-link active" : "flex-sm-fill text-sm-center nav-link"} id="orders-all-tab" data-bs-toggle="tab" href="#daftar-tugas" role="tab" aria-controls="orders-all" aria-selected="true" onClick={() => ActiveTab(false)}>Daftar Tugas</span>
        <span style={{ cursor: "pointer" }} className={tab === 6 ? "flex-sm-fill text-sm-center nav-link active" : "flex-sm-fill text-sm-center nav-link"} id="orders-all-tab" data-bs-toggle="tab" href="#orders-all" role="tab" aria-controls="orders-all" aria-selected="true" onClick={() => ActiveTab(6)}>Tambah Data VIP</span>
        <span style={{ cursor: "pointer" }} className={tab === 2 ? "flex-sm-fill text-sm-center nav-link active" : "flex-sm-fill text-sm-center nav-link"} id="orders-all-tab" data-bs-toggle="tab" href="#orders-all" role="tab" aria-controls="orders-all" aria-selected="true" onClick={() => ActiveTab(2)}>Task Data</span>
        <span style={{ cursor: "pointer" }} className={tab === 3 ? "flex-sm-fill text-sm-center nav-link active" : "flex-sm-fill text-sm-center nav-link"} id="orders-paid-tab" data-bs-toggle="tab" href="#orders-paid" role="tab" aria-controls="orders-paid" aria-selected="false" onClick={() => ActiveTab(3)}>Berhasil</span>
        <span className={tab === 4 ? "flex-sm-fill text-sm-center nav-link active" : "flex-sm-fill text-sm-center nav-link"} id="orders-cancelled-tab" data-bs-toggle="tab" href="#orders-cancelled" role="tab" aria-controls="orders-cancelled" aria-selected="false" onClick={() => ActiveTab(4)}>Cancelled</span>
      </nav>
      {/* Show DAta */}

      <TugasData tab={tab} />
    </>
  )
}

export default ManagementTugas
