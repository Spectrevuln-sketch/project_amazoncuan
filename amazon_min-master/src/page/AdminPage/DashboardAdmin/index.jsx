import React from 'react'
const DashboardAdmin = () => {
    return (
        <>
            <h1 className="app-page-title">Overview</h1>

            <div className="row g-4 mb-4">
                <div className="col-6 col-lg-3">
                    <div className="app-card app-card-stat shadow-sm h-100">
                        <div className="app-card-body p-3 p-lg-4">
                            <h4 className="stats-type mb-1">Total Sales</h4>
                            <div className="stats-figure">$12,628</div>
                            <div className="stats-meta text-success">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                </svg> 20%</div>
                        </div>{/*//app-card-body*/}
                        <a className="app-card-link-mask" href="#" />
                    </div>{/*//app-card*/}
                </div>{/*//col*/}
                <div className="col-6 col-lg-3">
                    <div className="app-card app-card-stat shadow-sm h-100">
                        <div className="app-card-body p-3 p-lg-4">
                            <h4 className="stats-type mb-1">Expenses</h4>
                            <div className="stats-figure">$2,250</div>
                            <div className="stats-meta text-success">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                </svg> 5% </div>
                        </div>{/*//app-card-body*/}
                        <a className="app-card-link-mask" href="#" />
                    </div>{/*//app-card*/}
                </div>{/*//col*/}
                <div className="col-6 col-lg-3">
                    <div className="app-card app-card-stat shadow-sm h-100">
                        <div className="app-card-body p-3 p-lg-4">
                            <h4 className="stats-type mb-1">Projects</h4>
                            <div className="stats-figure">23</div>
                            <div className="stats-meta">
                                Open</div>
                        </div>{/*//app-card-body*/}
                        <a className="app-card-link-mask" href="#" />
                    </div>{/*//app-card*/}
                </div>{/*//col*/}
                <div className="col-6 col-lg-3">
                    <div className="app-card app-card-stat shadow-sm h-100">
                        <div className="app-card-body p-3 p-lg-4">
                            <h4 className="stats-type mb-1">Invoices</h4>
                            <div className="stats-figure">6</div>
                            <div className="stats-meta">New</div>
                        </div>{/*//app-card-body*/}
                        <a className="app-card-link-mask" href="#" />
                    </div>{/*//app-card*/}
                </div>{/*//col*/}
            </div>{/*//row*/}

            {/* INCLUDE FOR MEMBER */}
            <div className="row g-4 mb-4">
                <div className="col-12 col-lg-6">
                    <div className="app-card app-card-stats-table h-100 shadow-sm">
                        <div className="app-card-header p-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <h4 className="app-card-title">Stats List</h4>
                                </div>{/*//col*/}
                                <div className="col-auto">
                                    <div className="card-header-action">
                                        <a href="#">View report</a>
                                    </div>{/*//card-header-actions*/}
                                </div>{/*//col*/}
                            </div>{/*//row*/}
                        </div>{/*//app-card-header*/}
                        <div className="app-card-body p-3 p-lg-4">
                            <div className="table-responsive">
                                <table className="table table-borderless mb-0">
                                    <thead>
                                        <tr>
                                            <th className="meta">Source</th>
                                            <th className="meta stat-cell">Views</th>
                                            <th className="meta stat-cell">Today</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">google.com</a></td>
                                            <td className="stat-cell">110</td>
                                            <td className="stat-cell">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                                </svg>
                                                30%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">getbootstrap.com</a></td>
                                            <td className="stat-cell">67</td>
                                            <td className="stat-cell">23%</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">w3schools.com</a></td>
                                            <td className="stat-cell">56</td>
                                            <td className="stat-cell">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                                </svg>
                                                20%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">javascript.com </a></td>
                                            <td className="stat-cell">24</td>
                                            <td className="stat-cell">-</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">github.com </a></td>
                                            <td className="stat-cell">17</td>
                                            <td className="stat-cell">15%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>{/*//table-responsive*/}
                        </div>{/*//app-card-body*/}
                    </div>{/*//app-card*/}
                </div>{/*//col*/}
            </div>{/*//row*/}

        </>
    )
}

export default DashboardAdmin
