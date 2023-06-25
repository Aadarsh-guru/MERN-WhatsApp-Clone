import { Box } from '@mui/material'
import { Typography, styled } from "@mui/material"
import { formateDate, downloadMedia } from '../../../utils/commonUtils'
import GetAppIcon from '@mui/icons-material/GetApp';
import { iconPDF } from '../../../constants/data'

const Time = styled(Typography)({
    fontSize: 10,
    color: '#919191',
    wordBreak: "keep-all",
    marginTop: 'auto'
})


const ImageMessage = ({ message }) => {
    return (
        <Box style={{ position: 'relative' }}  >
            {
                message?.text?.includes('.pdf') ?
                    <Box style={{ display: 'flex' }} >
                        <img src={iconPDF} alt="pdf" style={{ width: 80 }} />
                        <Typography style={{ fontSize: 14 }} >{message.text.split('/').pop()}</Typography>
                    </Box>
                    :

                    <img style={{ width: 300, objectFit: 'cover' }} src={message.text} alt="message.text" />
            }
            <Time style={{ position: 'absolute', bottom: 0, right: 0 }} >
                <GetAppIcon onClick={(e) => downloadMedia(e, message.text)} style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%', cursor: 'pointer' }} fontSize='small' />
                {formateDate(message.createdAt)}
            </Time>
        </Box>
    )
}

export default ImageMessage