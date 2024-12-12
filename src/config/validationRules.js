const validationRules = {}

validationRules.username = {
  required: { value: true, message: "Username is required" },
  minLength: {
    value: 3,
    message: "Username too short",
  },
  maxLength: {
    value: 15,
    message: "Username too long",
  },
}

validationRules.name = {
  required: { value: true, message: "Name is required" },
  minLength: {
    value: 3,
    message: "Name too short",
  },
  maxLength: {
    value: 15,
    message: "Name too long",
  },
}

validationRules.age = {
  required: { value: true, message: "Age is required" },
  min: {
    value: 18,
    message: "User must be at least 18 years old",
  },
  max: {
    value: 60,
    message: "User must be at most 60 years old",
  },
}

validationRules.email = {
  required: { value: true, message: "Email is required" },
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Invalid email address",
  },
}

validationRules.password = {
  required: {
    value: true,
    message: "Password is required",
  },
  minLength: {
    value: 6,
    message: "Password must be between 8 and 16 characters",
  },
  maxLength: {
    value: 16,
    message: "Password must be between 8 and 16 characters",
  },
}

validationRules.gender = {
  required: { value: true, message: "Gender is required" },
}

validationRules.address = {
  required: { value: true, message: "Address is required" },
  minLength: {
    value: 10,
    message: "Address too short",
  },
  maxLength: {
    value: 100,
    message: "Address too long",
  },
}

validationRules.city = {
  required: { value: true, message: "City is required" },
  minLength: {
    value: 3,
    message: "City too short",
  },
  maxLength: {
    value: 15,
    message: "City too long",
  },
}

validationRules.state = {
  validate: (value) => value !== "select" || "State is required",
}

validationRules.position = {
  required: { value: true, message: "Position is required" },
  minLength: {
    value: 3,
    message: "Position too short",
  },
  maxLength: {
    value: 15,
    message: "Position too long",
  },
}

validationRules.startDate = {
  required: { value: true, message: "Start Date is required" },
  valueAsDate: true,
  validate: (value) => {
    const today = new Date()
    const startDate = new Date(value)
    if (startDate > today) {
      return "Start Date cannot be greater than today"
    }
    return true
  },
}

validationRules.salary = {
  required: { value: true, message: "Salary is required" },
}

validationRules.terms = {
  required: {
    value: true,
    message: "You must agree before submitting",
  },
}

export { validationRules }
