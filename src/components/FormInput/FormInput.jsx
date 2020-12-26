import React from "react";

const FormInput = React.forwardRef(({ onChange, ...props }, ref) => {
  return <input {...props} ref={ref} onChange={onChange} />;
});

export default FormInput;
