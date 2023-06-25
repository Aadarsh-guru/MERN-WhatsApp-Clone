import { Box, Dialog, styled } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import ChatBox from './chat/ChatBox'
import EmptyChat from './chat/EmptyChat'
import Menu from './menu/Menu'


const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overFlow: 'hidden',
}

const Component = styled(Box)({
    display: 'flex'
})

const LeftComponent = styled(Box)({
    minWidth: 450
})

const RightComponent = styled(Box)({
    width: '73%',
    minWidth: 300,
    height: '100%',
    borderLeft: '1px solid rgba(0, 0 ,0, 0.14)'
})

const ChatDialog = () => {

    const { person } = useContext(AccountContext)

    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} maxWidth={'md'} >
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    {
                        Object.keys(person).length ? <ChatBox /> : <EmptyChat />
                    }
                </RightComponent>
            </Component>
        </Dialog>
    )
}

export default ChatDialog