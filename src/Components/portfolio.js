import React from 'react';
import { Box, Card, Grid, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core"
import ey1 from "./ey1.png"
import ey2 from "./ey2.png"
import ey3 from "./ey3.png"


import { makeStyles } from '@material-ui/core/styles';

const use = makeStyles({
    mainContainer: {
        background: "#223",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto",

    }

})

const Portfolio = () => {
    const classes = use();
    return (
        <div>
            <Box component="div" >
                <Grid container justify="center">
                    {/* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>

                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="Ernst and Young Canada site" height="140" image={ey1} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">Ernst and Young (Canada)</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">This site was created using AEM using JavaScript, CSS, HTML5 and React.</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"><a href="https://www.ey.com/en_ca" target="_blank">Live Demo Link</a></Button>

                                </CardActions>
                            </CardActionArea>
                        </Card></Grid>
                    {/* Project 2 */}
                    <Grid item xs={12} sm={8} md={6}>

                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="Ernst and Young(Korea)" height="140" image={ey2} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">Ernst and Young (Korea)</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">This site was created using JavaScript, CSS, HTML5 and React.</Typography>
                                </CardContent>
                                <CardActions>

                                    <Button size="small" color="primary"><a href="https://www.ey.com/en_kr" target="_blank">Live Demo Link</a></Button>
                                </CardActions>
                            </CardActionArea>
                        </Card></Grid>
                    {/* Project 3 */}
                    <Grid item xs={12} sm={8} md={6}>

                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="Project 1" height="140" image={ey3} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">Project 3</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">This site was created using JavaScript, CSS, HTML5 and React.</Typography>
                                </CardContent>
                                <CardActions>

                                    <Button size="small" color="primary"><a href="https://www.ey.com/en_in" target="_blank">Live Demo Link</a></Button>
                                </CardActions>
                            </CardActionArea>
                        </Card></Grid>
                    {/* Project 4 */}
                    <Grid item xs={12} sm={8} md={6}>

                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="Project 1" height="140" image={ey2} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">Ernst and Young (Webforms)</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">These forms are created using JavaScript, CSS, HTML5 and React.</Typography>
                                </CardContent>
                                <CardActions>

                                    <Button size="small" color="primary"> Demo Live Links: &nbsp; <a href="https://www.ey.com/echannel/content.nsf/vwwfpreview/in/en/ey-about-lt-foods?OpenDocument" target="_blank"> Food</a> &nbsp;  <a href="https://www.ey.com/echannel/content.nsf/vwwfpreview/in/en/ey-certificate-in-applied-finance?OpenDocument" target="_blank">Applied Finance</a></Button>
                                </CardActions>

                            </CardActionArea>
                        </Card></Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Portfolio