import LoginDialog from './LoginDialog'
import { AppBar, Toolbar, styled, Box } from '@mui/material'
import { AccountContext } from '../context/AccountProvider';
import { useContext } from 'react';
import ChatDialog from './chat/ChatDialog';


const Component = styled(Box)`
    height: 100vh;
    background: #dcdcdc;
`

const LoginHeader = styled(AppBar)`
    height : 220px !important;
    background: #00bfa5;
    box-shadow: none;
`

const Header = styled(AppBar)`
    height : 125px !important;
    background: #00A88A;
    box-shadow: none;
`

const Messenser = () => {

  const { account } = useContext(AccountContext)

  return (
    <Component>
      {
        account ?
          <>
            <Header>
              <Toolbar>

              </Toolbar>
            </Header>
            <ChatDialog />
          </>
          :
          <>
            <LoginHeader>
              <Toolbar>

              </Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
      }
    </Component>
  )
}

export default Messenser