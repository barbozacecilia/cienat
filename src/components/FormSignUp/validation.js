export const verifyEmail = (email) => {
    console.log(email)
    const length = email.length
    if (length > 4 && length < 50 && email.includes("@")) {
        return true
    } else {
        return false
    }
}

export const verifyPassword = (password) => {
    console.log(password)
    const length = password.length
    if (length > 6 && length < 11) {
        return true
    } else {
        return false
    }
}




export const verifyName = (name) => {
    console.log(name)
    const length = name.length
    return (length > 2 && length < 30) ? true : false
}
export const verifyLastName = (lastName) => {
    console.log(lastName)
    const length = lastName.length
    if (length > 2 && length < 50) {
        return true
    } else {
        return false
    }
}