import { Box, styled } from "@mui/material"
import { useContext, useState } from "react"
import { AccountContext } from "../../../context/AccountProvider"
import DataUsageIcon from '@mui/icons-material/DataUsage';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../InfoDrawer";


const Component = styled(Box)({
    height: 44,
    background: '#ededed',
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center'
})

const Wrapper = styled(Box)({
    marginLeft: 'auto',
    '& > *': {
        marginLeft: 2,
        padding: 8,
        color: '#000',
        cursor: 'pointer'
    },
    '& :first-child': {
        fontSize: 24
    }
})

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
    cursor: 'pointer'
})

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const { account } = useContext(AccountContext)

    return (
        <>
            <Component>
                <Image src={account?.picture} alt="Dp" onClick={() => setOpenDrawer(true)} />
                <Wrapper>
                    <DataUsageIcon />
                    <ChatIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header