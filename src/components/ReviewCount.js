import { Typography } from "@material-ui/core";

export default function ReviewCount({ data }) {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    }}>
        {
            data.map((_, index) => {
                return <div key={index}  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <div style={{
                        fontSize: 10
                    }}>
                        { 5 - index }
                    </div>
                    <div style={{
                        height: 20,
                        marginTop: 1,
                        marginBottom: 1,
                        marginLeft: 5,
                        width: calculatePercentate(index, data).toString() + '%',
                        backgroundColor: COLORS[index],

                    }}/>
                </div>
            })
        }
        
    </div>
}

function calculatePercentate(index, data) {
    return data[index] / Math.max(...data) * 100;
}

const COLORS = [
    '#156f21',
    '#2bb13a',
    '#c5c52b',
    '#c98e26',
    '#c52020'
]