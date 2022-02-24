import { Box, Typography,makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { Search, MoreVert } from '@material-ui/icons';
import { AccountContext } from '../../context/AccountProvider';

const useStyles = makeStyles({
    header: {
        height: 35,
        background: '#ededed',
        display: 'flex',
        padding: '10px 16px',
        alignItems: 'center'
    },
    displayPicture: {
        width: 37,
        height: 37,
        objectFit: 'cover',
        borderRadius: '50%',
        padding: '0 2px'
    },
    name: {
        marginLeft: 10
    },
    rightContainer: {
        marginLeft: 'auto',
        '& > *': {
            padding: 8,
            fontSize: 22,
            color: '#919191'
        }
    },
    status: {
        fontSize: 12,
        color: 'rgb(0, 0, 0, 0.6)',
        marginLeft: 10
    }
});

const ChatHeader=()=> {
    const classes=useStyles();
    const {person}=useContext(UserContext);
    const { activeUsers } = useContext(AccountContext);


    return (
        <Box className={classes.header}>
            <img src={person.imageUrl} alt="image" className={classes.displayPicture}/>
            <Typography className={classes.name}>
{person.name}
            </Typography>
            <Typography className={classes.status} >
            {activeUsers?.find(user => user.userId === person.googleId) ? 'Online' : 'Offline'}
                </Typography>
            <Box className={classes.rightContainer}>
<Search/> <MoreVert/>
            </Box>
        </Box>
        
    )
}

export default ChatHeader
