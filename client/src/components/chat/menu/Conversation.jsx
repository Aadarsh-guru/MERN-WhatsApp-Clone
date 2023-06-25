import { Box, styled, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { AccountContext } from "../../../context/AccountProvider"
import { setConversation, getConversation } from "../../../service/api"
import { formateDate } from "../../../utils/commonUtils"



const Component = styled(Box)({
    display: 'flex',
    height: 45,
    padding: '13px 0',
    cursor: 'pointer'
})


const Container = styled(Box)({
    display:'flex'
})

const Timestamp = styled(Typography)({
    fontSize:12,
    marginLeft:'auto',
    color: '#00000099',
    marginRight:20
})

const Text = styled(Typography)({
    fontSize:14,
    color: 'rgba(0,0,0, 0.9)',
    marginRight:20
})

const Conversation = ({ user }) => {

    const { setPerson, account, newMessageFlag } = useContext(AccountContext)

    const [message,setMessage] = useState({})

    useEffect(()=>{
        const getConversationDetails = async()=>{
          const data = await getConversation({ senderId : account.sub, receiverId: user.sub })
          setMessage({text: data?.message, timestamp: data?.updatedAt})
        }
        getConversationDetails()
         // eslint-disable-next-line
    },[newMessageFlag])

    const getUser = async()=>{
        setPerson(user)
        await setConversation({ senderId : account.sub, receiverId : user.sub })
    }

    return (
        <Component onClick={()=>getUser()} >
            <Box>
                <img src={user.picture} alt='DP' style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    padding: '0 14px',
                    objectFit: 'cover'
                }} />
            </Box>
            <Box style={{width:'100%'}} >
                <Container>
                    <Typography>{user.name}</Typography>
                    {
                        message?.text && 
                        <Timestamp>{formateDate(message?.timestamp)}</Timestamp>
                    }
                </Container>
                <Box>
                    <Text>{message?.text?.includes('localhost') ? 'media' : message?.text}</Text >
                </Box>
            </Box>
        </Component>
    )
}

export default Conversation