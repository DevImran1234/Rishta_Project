// src/components/Card.js
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card as MUICard, CardContent, Typography, Grid, Box } from '@mui/material';

function Card({ title, value, color }) {
    return (
        <Grid item xs={12} sm={6} md={3} mb={2}>
            <MUICard sx={{ display: 'flex', borderLeft: `5px solid ${color}`, boxShadow: 2 }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold', color: color, textTransform: 'uppercase' }}>
                        {title}
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        {value}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 2 }}>
                    <FontAwesomeIcon icon={faCalendar} size="2x" style={{ color: '#dddfeb' }} />
                </Box>
            </MUICard>
        </Grid>
    );
}

export default Card;
