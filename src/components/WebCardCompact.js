import { Card, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import StyledRating from "./StyledRating";

export default function WebCardCompact() {
    return  <Link to="/app/duckduckgo.com" style={{
        textDecoration: 'none',
    }}>
        <Card style={{
            display: 'flex',
            alignItems: 'center',
            padding: 10,
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1
            }}>
                <CardMedia image="https://api.faviconkit.com/duckduckgo.com/40" style={{
                    width: 40,
                    height: 40
                }}/>
                <Typography variant="h6" style={{
                    marginLeft: 10
                }}>
                    DuckDuckGo
                </Typography>
            </div>
        
            <div style={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <StyledRating readOnly value={4}/>
            </div>
        </Card>
    </Link>
}