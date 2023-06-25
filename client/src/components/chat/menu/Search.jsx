import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Component = styled(Box)({
    background: '#fff',
    height: 45,
    borderBottom: '1px solid #f2f2f2',
    display: 'flex',
    alignItems: 'center'
})

const Wrapper = styled(Box)({
    background: "#f0f3f5",
    position: 'relative',
    margin: '0 13px',
    width:'100%',
    borderRadius:10
})

const Icon = styled(Box)({
    position: 'absolute',
    height: '100%',
    padding: '6px 10px',
    color: '#919191'
})

const Input = styled(InputBase)({
    width: '100%',
    padding: 16,
    paddingLeft: 65,
    height: 15,
    fontSize:14,
})

const Search = ({ setText }) => {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize='small' />
                </Icon>
                <Input onChange={(e)=>setText(e.target.value)} placeholder='Search or start a new chat.' />
            </Wrapper>
        </Component>
    )
}

export default Search