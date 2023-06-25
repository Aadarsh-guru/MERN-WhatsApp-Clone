import { Typography, styled } from "@mui/material"
import { formateDate } from '../../../utils/commonUtils'


const Text = styled(Typography)({
    fontSize: 14,
    padding: '0 25px 0 5px'
})

const Time = styled(Typography)({
    fontSize: 10,
    color: '#919191',
    wordBreak: "keep-all",
    marginTop: 'auto'
})

const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formateDate(message.createdAt)}</Time>
        </>
    )
}

export default TextMessage