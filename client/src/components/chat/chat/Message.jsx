import { Box, styled } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import TextMessage from './TextMessage'
import ImageMessage from './ImageMessage'


const Own = styled(Box)({
    background: '#dcf8c6',
    maxWidth: '60%',
    marginLeft: 'auto',
    padding: 5,
    width: 'fit-content',
    display: 'flex',
    borderRadius: 10,
    wordBreak: 'break-word'
})

const Wrapper = styled(Box)({
    background: '#ffffff',
    maxWidth: '60%',
    padding: 5,
    width: 'fit-content',
    display: 'flex',
    borderRadius: 10,
    wordBreak: 'break-word'
})


const Message = ({ message }) => {

    const { account } = useContext(AccountContext)

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </Own>
                    :
                    <Wrapper>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </Wrapper>
            }
        </>
    )
}

export default Message