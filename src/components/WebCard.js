import { Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Rating from './StyledRating';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    rating: {
    },
    title: {
        fontFamily: "Verdana"
    },
    link: {
        fontFamily: "Monospace"
    },
    icon: {
        flex: 'flex-end',
        width: 50,
        height: 50
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    media: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 10
    }
}))

export default function WebCard(){
    const classes = useStyles();
    return (
        <Link to="/app/duckduckgo.com" style={{
            textDecoration: 'none'
        }}>

        <Card className={classes.root}>
            <div className={classes.media}>
                    <CardMedia
                        className={classes.icon}
                        image="https://api.faviconkit.com/duckduckgo.com/144"
                    />
                
            </div>
            
            <CardContent className={classes.details}>
                <Typography className={classes.title}>DuckDuckGo</Typography>
                <Typography className={classes.link}>duckduckgo.com</Typography>
                <Rating readOnly className={classes.rating} size="small" value={4}/>
            </CardContent>
        </Card>
        </Link>

    )
}