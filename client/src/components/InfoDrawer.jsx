import { Box, Drawer, styled, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';


const Header = styled(Box)({
  background: '#008069',
  height: 107,
  color: '#ffffff',
  display: 'flex',
  '& > svg, & > p': {
    marginTop: 'auto',
    padding: 15,
    fontWeight: 600
  }
})

const Component = styled(Box)({
  background: '#ededed',
  height: '87%'
})

const Text = styled(Typography)({
  fontSize: 18
})

const drawerStyle = {
  left: 20,
  top: 20,
  height: '95%',
  width: '31%',
  boxShadow: 'none',
  borderRadius: ' 5px 0 0 5px '
}

const InfoDrawer = ({ open, setOpen }) => {
  return (
    <Drawer open={open} onClose={() => setOpen(false)} PaperProps={{ sx: drawerStyle }} style={{ zIndex: 1500 }} >
      <Header>
        <ArrowBackIcon onClick={() => setOpen(false)} style={{ cursor: 'pointer' }} />
        <Text>Profile</Text>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  )
}

export default InfoDrawer