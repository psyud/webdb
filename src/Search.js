import { Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import WebCardCompact from "./components/WebCardCompact";

export default function Search({ location }) {
    const history = useHistory();
    if(location.state && location.state.term){
        const { term } = location.state;
        console.log(term)
    }else{
        history.replace("/");
    }
    return <Container maxWidth="sm" style={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        {
            [1,2,3,4,5,6].map(x => <div key={x} style={{
                marginTop: 5, 
                marginBottom: 5
            }}>
                    <WebCardCompact/>
                </div>)
        }
        <Alert severity="info">Don't find the app you're looking for? Click <Link to="/">here</Link> to register it with our tamper-proof, distributed ledger :)</Alert>
    </Container>
}