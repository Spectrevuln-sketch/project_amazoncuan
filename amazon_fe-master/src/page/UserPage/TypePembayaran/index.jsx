import React from 'react'

// import components
import { TypePembayaranNavHeader, TypePembayaranPaymentMethod, TypePembayaranShareNotif } from '../../../components/Moleculs'
// import icons
import { IconContext } from "react-icons";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
// import css
import './type-pembayaran.css'
// import React Helmet
import { Helmet } from "react-helmet";
const TypePembayaran = () => {

  return (
    <div data-v-ebf933f6>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faco | Top Up</title>
      </Helmet>
      <div data-v-7fcad33a data-v-ebf933f6 className="detail-info Site IndexBox">
        <TypePembayaranNavHeader title="Penambahan Uang" />
        <TypePembayaranShareNotif />
        <TypePembayaranPaymentMethod />

        <form data-v-7fcad33a method="get" id="test_form" name="forms" style={{ opacity: 0 }}>
          <button data-v-7fcad33a id="submitBtn" type="submit" />
        </form>
        {/**/}
      </div>
    </div>
  )
}

export default TypePembayaran
