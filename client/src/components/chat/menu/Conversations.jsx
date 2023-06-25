import { Box, Divider, styled } from "@mui/material"
import { useState, useEffect, useContext } from "react"
import { getUsers } from "../../../service/api"
import { AccountContext } from "../../../context/AccountProvider"
import Conversation from "./Conversation"


const Component = styled(Box)({
    overflow: 'overlay'
})

const StyledDivider = styled(Divider)({
    margin: '0 0 0 70px',
    background: '#e9edef',
    opacity: '.6'
})

const Conversations = ({ text }) => {

    const { account, socket, setActiveUsers } = useContext(AccountContext)

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let res = await getUsers()
            const filteredData = res.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData)
        }
        fetchData()
        // eslint-disable-next-line
    }, [text])


    useEffect(() => {
        socket.current.emit('addUser', account)
        socket.current.on("getUsers", users => {
            setActiveUsers(users)
        })
        // eslint-disable-next-line
    }, [account])


    return (
        <Component>
            {
                users?.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={user} />
                        <StyledDivider />
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations