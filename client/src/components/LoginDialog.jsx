import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import { qrCodeImage } from '../constants/data'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { AccountContext } from '../context/AccountProvider';
import { useContext } from 'react';
import { addUser } from '../service/api'

const dialogStyle = {
    height: '95%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overFlow: 'hidden'
}

const Component = styled(Box)({
    display: 'flex'
})

const Container = styled(Box)({
    padding: '56px 0 56px 56px',
})

const QrCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
})

const Title = styled(Typography)({
    fontSize: 26,
    color: ' 525252',
    fontWeight: '300',
    fontFamily: 'inherit',
    marginBottom: 25
})


const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color #4a4a4a
    }
`

const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext)

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential)
        setAccount(decoded)
        await addUser(decoded)
    }

    const onLoginError = (res) => {
        console.log(res);
    }

    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} >
            <Component>
                <Container>
                    <Title>To use Whats App on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on Your Computer</ListItem>
                        <ListItem>2. Tab Menu Settings And Select WhatsApp Web.</ListItem>
                        <ListItem>3. Point Your Phone to the Screen And capture the Bar Code.</ListItem>
                    </StyledList>
                </Container>
                <Box style={{ position: 'relative' }} >
                    <QrCode src={qrCodeImage} alt="qrCode" />
                    <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%)' }}>
                        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog