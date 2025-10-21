const namesMap = Object.freeze({
    "id": 'User ID',
    "name": "Name",
    "username": "NickName",
    "email": "Email",
    "address": "Address",
    "phone": "Phone",
    "website": "Website",
    "company": "Company"
})


const nameNormalizer = (name) => {
    return namesMap[name] || name
}

export default nameNormalizer