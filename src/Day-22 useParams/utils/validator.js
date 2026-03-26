import validator from "validator"

export const isValidate = (email, password) => {
    if(!validator.isEmail(email))
    {
        return {status: false, message: "Invalid Email"};
    }

    if(!validator.isStrongPassword(password,{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1}))
    {
    return {status: false, message: "Invalid Password"}
    }

    return {status:true, message: "Login Successfull"}
}