import { Box, InputBase, styled } from '@mui/material'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { useEffect } from 'react';
import { uploadFile } from '../../../service/api';


const Container = styled(Box)({
    height: 65,
    background: '#ededed',
    display: 'flex',
    // width:'100%',
    alignItems: 'center',
    padding: '0 15px',
    ' & > *': {
        margin: 5,
        color: '#919191'
    }
})

const InputFeild = styled(Box)`
    background:#ffffff;
    border-radius:18px;
    padding:5px 10px;
    width: calc(94% - 100px);
`


const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData()
                data.append('name', file.name)
                data.append('file', file)

                let response = await uploadFile(data)
                setImage(response.data)
            }
        }
        getImage()
        // eslint-disable-next-line 
    }, [file])

    const onFileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0])
        setValue(e.target.files[0].name)
    }

    return (
        <Container>
            <EmojiEmotionsOutlinedIcon />
            <label htmlFor="fileInput">
                <AttachFileOutlinedIcon style={{ transform: 'rotate(40deg)', cursor: 'pointer' }} />
            </label>
            <input type="file" id='fileInput' style={{ display: 'none' }} onChange={(e) => onFileChange(e)} />
            <InputFeild>
                <InputBase style={{
                    width: '100%',
                    fontSize: 14
                }}
                    value={value}
                    placeholder='Type a message'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                />
            </InputFeild>
            <MicOutlinedIcon />
        </Container>
    )
}

export default Footer