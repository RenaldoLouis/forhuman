import React, { memo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Content() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className="content-card1">
                    asd
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className="content-card2">
                    asd
                </div>
            </Grid>
            <Grid item xs={12}>
                <Item>xs=4</Item>
            </Grid>
        </Grid>
    );
}

export default Content;
