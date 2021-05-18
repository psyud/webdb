import { Button, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import Rating  from './StyledRating';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function MyReview(){
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
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontFamily: 'monospace'
                }} >MY REVIEW</Typography>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
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
                <div>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                </div>
            </div>
            
            <Typography style={{
                marginTop: 10,
                fontSize: 12,
            }}>
                Best fucking app ever!
            </Typography>
        </div>
    </>
}