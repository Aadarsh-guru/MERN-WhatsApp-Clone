import { Box, styled, Typography } from '@mui/material'
import { MoreVert, Search } from '@mui/icons-material'
import { emptyProfilePicture } from '../../../constants/data'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'


const Header = styled(Box)({
  height: 44,
  background: '#ededed',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center'
})

const RightContainer = styled(Box)({
  marginLeft: 'auto',
  '& > svg': {
    padding: 8,
    fontSize: 24,
    color: '#000',
    cursor: 'pointer'
  }
})

const ChatHeader = ({ person }) => {

  const { activeUsers } = useContext(AccountContext)

  return (
    <Header>
      <img src={person ? person.picture : emptyProfilePicture} style={{ height: 40, width: 40, objectFit: 'cover', borderRadius: '50%', cursor: 'pointer' }} alt="DP" />
      <Box>
        <Typography style={{ marginLeft: 12 }} >{person.name}</Typography>
        <Typography style={{ marginLeft: 12, fontSize: 12, color: 'rgb(0, 0, 0, 0.6)' }}  >{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Typography>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  )
}

export default ChatHeader