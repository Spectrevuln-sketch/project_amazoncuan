import React from 'react';
import { useParams } from 'react-router-dom';

const EditTugasPage = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>Ini Edit Page Untuk id {id}</h1>
    </div>
  )
}

export default EditTugasPage
