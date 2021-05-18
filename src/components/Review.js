import { Typography } from '@material-ui/core';
import React from 'react';
import Rating  from './StyledRating';

export default function Review(){
    return <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 10,
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 10
            
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Typography style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'monospace'
                }} >0x4e3942ac8c0dffb2253e2ec305a62b7b33f91e60</Typography>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Rating readOnly value={4} size="small"/>
                <Typography style={{
                    fontSize: 10,
                    color: 'gray',
                    display: 'inline-block',
                    marginLeft: 4,
                    paddingTop: 2
                }}>May 5 2021</Typography>
            </div>
            <Typography style={{
                marginTop: 10,
                fontSize: 12,
            }}>
                This app is really user-friendly, and here, your privacy matters the most! So far I haven't seen any ads when browsing websites, which is AMAZING. Trackers are blocked every time you open a new website, and the first time you open the app, you get walked through what the app can do. You can also "burn" all your tabs in one tap, so it clears all your data. If there are some sites you want to stay unburnt you can make them fireproof as well! Overall, very much recommended, even better than Google!
            </Typography>
        </div>
    </>
}