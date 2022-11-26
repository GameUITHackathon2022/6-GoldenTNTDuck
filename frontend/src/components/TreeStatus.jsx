import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";
import TreePot from "../assets/tree-pot.png";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const TreeStatus = ({info} ) => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#84cc16' : '#308fe8',
        },
        }));

    return (
        <>
            <Card sx={{ maxWidth: 400, padding: '10px', margin: '10px'}}>
                <CardActionArea>
                    <Grid container spacing={0}>
                    <Grid item xs={4} >
                        <CardMedia
                        component="img"
                        height="10"
                        image={TreePot}
                        alt="green iguana"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {info.desc}
                        </Typography>
                        </CardContent>
                    </Grid>
                    </Grid>
                    <BorderLinearProgress variant="determinate" value={info.progress} />
                </CardActionArea>
            </Card>
        </>
    );
};

export default TreeStatus;
