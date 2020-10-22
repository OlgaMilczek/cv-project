import React from 'react';
import defaultPhoto from './defaultPhoto.js' 

function Input(props) {
    let inputType;
    if (props.type === 'textarea') {
        inputType = <textarea 
                        onChange={props.onChange}
                        value= {props.nameValue}
                        id={props.name}
                        className="form-control"
                        maxLength = {props.maxLength}
                        required = {props.required}
                    />
    } else {
        inputType = <input
                    onChange={props.onChange}
                    value={((props.name === 'photo') && (props.nameValue === defaultPhoto)) ? '' : props.nameValue}
                    type={props.type}
                    id={props.name}
                    className="form-control"
                    required = {props.required}
                />
    }

    return (
        <div className="col form-group">
            <div className="form-group">
                <label htmlFor={props.name}>
                    {props.labelName}
                    {props.optional ? <abbr title='optional'>*</abbr> : ''}
                    </label>
                    {inputType}
            </div>
        </div>
    )
}

export default Input;
