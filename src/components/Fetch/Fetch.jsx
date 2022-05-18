import axios from "axios";
axios.defaults.baseURL = "https://627bd7c4a01c46a8532678ad.mockapi.io"


// export const addContacts = async contacts =>{
//     try {
//         const response = await axios.post('/contacts',contacts)
//         return response.data
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// export const getContacts =  async() =>{
//     try {
//         const response = await axios.get('/contacts')
//         return response.data
//     }
//     catch(error){
//         console.log(error)
//     }
// }
export const deleteContacts =  async id =>{
    try {
        const response = await axios.delete(`/contacts/${id}`)
        return response.data
    }
    catch(error){
        console.log(error)
    }
}
export const getContactsById = async id =>{
    try {
        const response = await axios.get(`/contacts/${id}`)
        return response.data
    }
    catch(error){
        console.log(error)
    }
}