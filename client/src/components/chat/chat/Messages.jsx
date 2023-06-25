import { Box, styled } from '@mui/material'
import { useContext, useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import { AccountContext } from '../../../context/AccountProvider'
import { getMessages, newMessage } from '../../../service/api'
import Message from './Message'

const Wrapper = styled(Box)({
  backgroundImage: `url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})`,
  backgroundSize: '50%'
})

const Component = styled(Box)({
  height: '80vh',
  overflowY: 'scroll'
})

const Container = styled(Box)({
  padding: '1px 80px'
})

const Messages = ({ person, conversation }) => {

  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])
  const [file, setFile] = useState()
  const [image, setImage] = useState('')
  const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext)
  const [incomingMessege, setIncomingMessege] = useState(null)
  const scrollRef = useRef()


  useEffect(()=>{
    socket.current.on('getMessage', data =>{
      setIncomingMessege({
        ...data,
        createdAt: Date.now()
      })
    })
    // eslint-disable-next-line
  },[])

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id)
      setMessages(data)
    }
    conversation._id && getMessageDetails()
    // eslint-disable-next-line
  }, [person._id, conversation._id, newMessageFlag])


  useEffect(()=>{
    scrollRef.current?.scrollIntoView({ transition:'smooth' })
  },[messages])

  useEffect(()=>{
    incomingMessege && conversation?.members?.includes(incomingMessege.senderId) && setMessages(prev => [...prev, incomingMessege])
    // eslint-disable-next-line
  },[incomingMessege, conversation])


  const sendText = async (e) => {
    const code = e.keyCode || e.which
    if (code === 13) {
      let message;
      if (!file) {
          message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text: value
        }
      }else{
          message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'file',
          text: image
        }
      }


      socket.current.emit('sendMessage',message)


      await newMessage(message);
      setValue('')
      setFile('')
      setImage('')
      setNewMessageFlag(prev => !prev)
    }
  }

  return (
    <Wrapper>
      <Component>
        {
          messages?.map(message => (
            <Container ref={scrollRef} >
              <Message message={message} />
            </Container>
          ))
        }
      </Component>
      <Footer sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage} />
    </Wrapper>
  )
}

export default Messages