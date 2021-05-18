  
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import { Card, CardContent, CardMedia, Container, Divider, Fade, IconButton, TextareaAutosize, Typography } from '@material-ui/core';
import Rating  from './components/StyledRating';
import { PermIdentityOutlined } from '@material-ui/icons';
import ReviewCount from './components/ReviewCount';
import Review from './components/Review';
import MyReview from './components/MyReview';
import AddReview from './components/AddReview';
import { Button, Modal } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    flexRow: {
        diplay: 'flex',
        flexDirection: 'row'
    },
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    rating: {
    },
    title: {
        fontFamily: "Verdana",
        fontSize: 30
    },
    link: {
        fontFamily: "Monospace"
    },
    icon: {
        flex: 'flex-end',
        width: 144,
        height: 144
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexGrow: 1
    },
    media: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 10
    },
    grow: {
        flexGrow: 1,
    },
    modal: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: 10
    }
}))


export default function Detail({match}) {
    const {
        params: { url },
    } = match;
    console.log(url);
    const classes = useStyles();

    const [ modalOpen, setModalOpen ] = useState(false);

    const header = () => <div style={{
        display: 'flex',
        margin: 20
    }}>
        <div className={classes.media}>
            <CardMedia
                className={classes.icon}
                image="https://api.faviconkit.com/duckduckgo.com/144"
            />
        </div>
        <CardContent className={classes.details}>
            <Typography className={classes.title}>DuckDuckGo</Typography>
            <Typography className={classes.link}>duckduckgo.com</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Rating readOnly className={classes.rating} size="small" value={4}/>
                <Typography className={classes.reviewCount} style={{ marginLeft: 5, fontSize: 14 }}>1123</Typography>
                <PermIdentityOutlined style={{ fontSize: 16 }}/>
            </div>
        </CardContent>
    </div>

    const data = [1000, 5000, 500, 200, 100];

    const stats = () => <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div style={{
            display: 'inline-block',
            width: '25%'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20
            }}>
                <Typography variant='h2'>4</Typography>
                <Rating readOnly size="small" value={4}/>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <PermIdentityOutlined style={{ fontSize: 16 }}/>
                    <Typography variant='caption' className={classes.reviewCount} >1123 Total</Typography>
                </div>
            </div>
        </div>
        <div style={{
            display: 'inline-block',
            width: '75% ',
            paddingRight: 20
        }}>
            <ReviewCount data={data}/>
        </div>
    </div>

    const reviews = () => {
        return [1,2,3,4,5].map(x => <Review key={x}/>)
    }

    const modal = () => 
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Fade in={modalOpen}>
                <div className={classes.modal} style={{
                    marginTop: window.innerHeight/5,
                    height: 400,
                    width: '50%',
                    minWidth: 400
                }}>
                    <div className={classes.topBar} style={{
                        backgroundColor: '#3f51b5',
                        height: 50,
                        padding: 10,
                        display: 'flex',
                        alignItems: 'center',
                        color: '#fff'
                    }}>REVIEW BY 0x4e3942ac8c0dffb2253e2ec305a62b7b33f91e60</div>
                    <div style={{
                        display: 'flex',
                        height: 350
                    }}>
                        <div style={{
                            display: 'flex',
                            flexGrow: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img src="https://api.faviconkit.com/duckduckgo.com/144"/>
                            <Typography>DuckDuckGo</Typography>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 10,
                            flexGrow: 9
                        }}>
                            <TextareaAutosize style={{
                                width: '100%',
                                height: '80%',
                                border: '1px solid #3f51b5'
                            }}/>
                            <Divider/>
                            <div style ={{
                                padding: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                height: '20%'
                            }}>
                                <Rating/>
                                <Button style={{
                                    marginLeft: 20
                                }} variant='contained' color='primary'>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>

    return <div className={classes.grow}>
        <Container maxWidth="sm" style={{ marginTop: '2em'}}>
            <Card className={classes.flexColumn}>
                { header() }
                <Divider/>
                <MyReview/>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: 20
                }}>
                    <Button 
                        onClick={()=>setModalOpen(true)}
                        startIcon={<EditIcon/>}
                        style={{
                            textTransform: 'none'
                        }} size="small" variant="outlined" color="primary">Write a review</Button>
                </div>
                { stats() }
                <Divider/>
                { reviews() }
            </Card>
            {
                modal()
            }
        </Container>
    </div>
}