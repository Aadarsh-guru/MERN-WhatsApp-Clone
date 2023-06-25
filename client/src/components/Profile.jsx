import { Box, styled, Typography } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'


const ImageContainer = styled(Box)({
    display: 'flex',
    justifyContent: "center",
})

const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
})

const BoxWrapper = styled(Box)({
    background: '#fff',
    padding: '12px 30px 2px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
    ' & : first-child ': {
        fontSize: 13,
        color: '#009688',
        fontWeight: 200
    },
    '& : last-child': {
        margin: '14px 0'
    }
})

const Description = styled(Box)({
    padding: '15px 20px 28px 30px',
    ' & > p': {
        fontSize: 13,
        color: '#8696a0'
    }
})

const Profile = () => {

    const { account } = useContext(AccountContext)

    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="dp" />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            <Description>
                <Typography>This is not your username or PIN this will be visible to your WhatsApp contacts.</Typography>
            </Description>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! Code! Repeat.</Typography>
            </BoxWrapper>
        </>
    )
}

export default Profile