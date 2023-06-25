import { Box, Divider, styled, Typography } from "@mui/material"
import { emptyChatImage } from '../../../constants/data'


const Component = styled(Box)({
  background:'#f8f9fa',
  padding:' 30px 0',
  textAlign:'center',
  height: '100% !important'
})

const Container = styled(Box)({
  padding:'0 200px',
})

const Image = styled('img')({
  width:400,
  marginTop:180
})

const Title = styled(Typography)({
  fontSize:32,
  margin:'25px 0 10px 0',
  fontFamily:'inherit',
  fontWeight:300,
  color:'#41525d'
})

const SubTitle = styled(Typography)({
  fontSize: 14,
  color: '#667781',
  fontWeight:400,
  fontFamily:'inherit'
})

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="empty" />
        <Title>WhatsApp Web</Title>
        <SubTitle>Send and receive messages without keeping your phone online.</SubTitle>
        <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
        <Divider style={{margin:'40px 0 110px 0', opacity:0.4}}/>
      </Container>
    </Component>
  )
}

export default EmptyChat