import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const checkboxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "5px",
  paddingLeft: "30px",
  fontWeight: "800",
};

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          console.log("Field", field);
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <div style={checkboxStyle}>
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label style={{ margin: "0px 0px" }} htmlFor={option.value}>
                    {option.key}
                  </label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckboxGroup;
