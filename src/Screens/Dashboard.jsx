import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Doughnut, Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import Card from './Card'; 

// Register Chart.js components
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f6f8' }}>
        <Grid container spacing={3}>
          {/* Header */}
          <Grid item xs={12} sm={6} md={8}>
            <Typography variant="h4" color="textPrimary" gutterBottom>
              Dashboard
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faDownload} />}
              sx={{
                backgroundColor: 'deeppink',
                color: '#fff',
                '&:hover': {
                  backgroundColor: 'darkviolet',
                },
              }}
            >
              Generate Report
            </Button>
          </Grid>

          {/* Cards */}
          <Card title="Earnings (Monthly)" value="$40,000" color="primary" />
          <Card title="Earnings (Annual)" value="$215,000" color="success" />
          <Card title="Tasks" value="50%" color="info" />
          <Card title="Pending Requests" value="18" color="warning" />

          {/* Charts */}
          <Grid item xs={12} md={4}>
            <Doughnut
              options={{
                plugins: {
                  title: { display: true, text: 'Revenue Sources' }
                }
              }}
              data={{
                labels: ['Direct', 'Referral', 'Social'],
                datasets: [{
                  data: [55, 30, 15],
                  backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'lightgreen'],
                  hoverOffset: 4
                }]
              }}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Line
              options={{
                responsive: true,
                plugins: {
                  legend: { position: 'top' },
                  title: { display: true, text: 'Earnings Overview' }
                }
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: 'Earnings in $',
                  data: [0, 10000, 5000, 15000, 13000, 22000, 33000],
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
                }]
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
