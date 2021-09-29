import React from 'react'
// components
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { MainInput, DropDownInput } from '../../../components';
// End components
const OriginalForm = ({ inputField, ...rest }) => {
  console.log(inputField)
  return (
    <div className="app-card app-card-settings shadow-sm p-4">
      <div className="app-card-body">

        <Form className="settings-form" {...rest} >
          {inputField}
        </Form>

      </div>
    </div>
  )
}

export default OriginalForm
