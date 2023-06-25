import axios from 'axios'

export const addUser = async (data) => {
    try {
        await axios.post(`/add`, data)
    } catch (error) {
        console.log('error while calling add user api', error.message);
    }
}


export const getUsers = async () => {
    try {
        let response = await axios.get(`/users`)
        return response.data;
    } catch (error) {
        console.log('error while calling get users api', error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`/conversation/add`, data)
    } catch (error) {
        console.log('error while calling setConversation api', error.message);
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`/conversation/get`, data)
        return response.data
    } catch (error) {
        console.log('error while calling getConversation api', error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`/message/add`, data)
    } catch (error) {
        console.log('error while calling newMessage api', error.message);
    }
}


export const getMessages = async (id) => {
    try {
        let response = await axios.get(`/message/get/${id}`)
        return response.data
    } catch (error) {
        console.log('error while calling getMessages api', error.message);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`/file/upload`,data)
    } catch (error) {
        console.log('error while calling uploadFile api', error.message);
    }
}
