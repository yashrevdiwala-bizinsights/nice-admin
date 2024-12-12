/* eslint-disable react/prop-types */

import React from "react"

const Label = ({ children, ...props }) => {
  return <label {...props}>{children}</label>
}

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input className={className} ref={ref} {...props} />
))

Input.displayName = "Input"

const TextArea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea className={className} ref={ref} {...props} />
))

TextArea.displayName = "TextArea"

const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <select className={className} ref={ref} {...props}>
    {children}
  </select>
))

Select.displayName = "Select"

const SelectOption = ({ className, children, ...props }) => {
  return <option className={className} label={children} {...props} />
}

const SelectValue = ({ ...props }) => {
  return <SelectOption {...props} disabled />
}

const Button = ({ type, className, children, ...props }) => {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  )
}

export { Label, Input, TextArea, Select, SelectValue, SelectOption, Button }
