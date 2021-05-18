import { Card, CardMedia, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Review from "./components/Review";

export default function Me() {
    return <Container maxWidth="sm" style={{ marginTop: '2em'}}>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap" rel="stylesheet"/>
        <div style={{ textAlign: 'center' }}>
            <Typography variant="h4" style={{
                fontFamily: 'Rajdhani'
            }}>MY REVIEWS</Typography>
        </div>
        <div style={{
            marginTop: 20
        }}>
            {
                [1,2,3,4,5].map(x => 
                <Link key={x} to="/app/duckduckgo.com" style={{
                    textDecoration: 'none'
                }}>
                    <Card style={{
                        marginTop:10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <CardMedia
                        style={{
                            width: 30,
                            height: 30,
                            marginTop: 10
                        }}
                            image="https://api.faviconkit.com/duckduckgo.com/40"
                        />
                        <Review/>
                    </Card>
                </Link>
                )
            }
        </div>
    </Container>
}