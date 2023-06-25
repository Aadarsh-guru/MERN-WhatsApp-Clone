import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, styled } from '@mui/material';
import { useState } from 'react';

const HeaderMenu = ({setOpenDrawer}) => {

    const [open, setOpen] = useState(null)

    const MenuOption = styled(MenuItem)({
        fontSize:14,
        padding:'15px 60px 5px 24px',
        color:'#4a4a4a'
    })

    return (
        <>
            <MoreVertIcon onClick={(e)=>setOpen(e.currentTarget)} />
            <Menu
                anchorEl={open}
                keepMounted={true}
                open={open}
                onClose={()=>setOpen(false)}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
            >
                <MenuOption onClick={()=>{setOpen(false); setOpenDrawer(true);}} >Profile</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu