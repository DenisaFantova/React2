import React from "react";

const EmailInput = ({email, isValid, onChange}) => { 
        
    return (
      <div className="validated-input">
        <input 
          type="email"
          value={email}
          onChange={(e) => onChange(e.target.value)}
        />
        { 
          isValid
          ? null 
          : <div className="invalid-msg">Invalid email address</div>
        }
      </div>
    )
  };

  export default EmailInput;