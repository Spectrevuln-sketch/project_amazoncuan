import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

const MainInput = ({ label, ...rest }) => {
    return (
        <>
            <FormGroup className="mb-3">
                <Label htmlFor="judul_tugas" className="form-label">{label}</Label>
                <Input type="text" {...rest} />
            </FormGroup>
        </>
    )
}

export default MainInput
