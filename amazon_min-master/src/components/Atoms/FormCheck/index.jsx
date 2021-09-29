import React from 'react'

const FormCheck = (props, { defaultChecked, ...rest }) => {
    console.log({ ...rest })
    console.log(props)
    return (
        <div className="extra mb-3">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="RememberPassword" {...rest} />
                <label className="form-check-label" htmlFor="RememberPassword">
                    {props.label.map(html => <span key={html.id}>{html.text}</span>)}
                </label>
            </div>
        </div>
    )
}

export default FormCheck
