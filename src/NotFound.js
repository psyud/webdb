import { Container, Typography } from "@material-ui/core";
import SentimentVeryDissatisfiedRoundedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';

export default function NotFound() {
    return <Container>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: window.innerHeight / 2
        }}>
           <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            <Typography variant="h4" style={{
                fontFamily: 'Anton'
            }}>   
                404 NOT FOUND
            </Typography>
            <SentimentVeryDissatisfiedRoundedIcon style={{
                fontSize: 50
            }}/>
            
        </div>
        
    </Container>
}