import React, { useContext } from 'react'
import UserContext from '../../../context/CurrentUserContext';
const TypePembayaranShareNotif = () => {
  const { UserData } = useContext(UserContext);
  return (
    <div data-v-7fcad33a className="share">
      <span data-v-7fcad33a className="share-left" />
      <span data-v-7fcad33a className="text">Saldo tersedia {UserData.pendapatan === null ? 0 : UserData.pendapatan}, sila pilih saluran isi uang</span><span data-v-7fcad33a className="share-right" /></div>
  )
}

export default TypePembayaranShareNotif;
