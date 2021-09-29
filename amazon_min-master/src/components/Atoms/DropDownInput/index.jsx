import React, { useEffect } from 'react'

const DropDownInput = ({ label, data, vip, optionLabel, ...rest }) => {
  console.log(vip)
  return (
    <div class="col-12 my-3">
      <label for="dropdown" className="fw-bold mb-2">{label}</label>
      <select class="form-select" id="dropdown" {...rest}>
        <option selected>{optionLabel === undefined ? 'Choose...' : optionLabel}</option>
        {data && (
          data.map(currentData => {
            return <option value={currentData.id} key={currentData.id} > {currentData.title_kategori}</option>
          })
        )}
        {vip && (
          vip.data.map(res => {
            return <option value={res.id} key={res.id} > {res.vip_name}</option>
          })
        )}
      </select>
    </div>
  )
}

export default DropDownInput
