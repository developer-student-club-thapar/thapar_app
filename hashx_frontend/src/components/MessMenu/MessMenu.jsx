import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { secondaryColor } from '../../theme/theme';

const MessMenu = () => {
  return (
    <>
      <Paper
        elevation={3}
        style={{
          borderRadius: '20px',
          backgroundColor: `${secondaryColor}`,
          color: '#FBF9FF',
          marginTop: '-30px',
        }}
      >
        <br />
        <h1 style={{ fontWeight: '400', paddingLeft: '30px' }}>Mess Menu</h1>
        <Grid container spacing={2} style={{ paddingLeft: '30px' }}>
          <Grid item xs={12}>
            <h3 style={{ fontWeight: 'bold' }}>Breakfast</h3>
          </Grid>
          <Grid item xs={12}>
            <h4> Food, Food, Food, Food, Food, Food, Food, Food, Food</h4>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2} style={{ paddingLeft: '30px' }}>
          <Grid item xs={12}>
            <h3 style={{ fontWeight: 'bold' }}>Lunch</h3>
          </Grid>
          <Grid item xs={12}>
            <h4>Food, Food, Food, Food, Food, Food, Food, Food, Food</h4>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2} style={{ paddingLeft: '30px' }}>
          <Grid item xs={12}>
            <h3 style={{ fontWeight: 'bold' }}>Dinner</h3>
          </Grid>
          <Grid item xs={12}>
            <h4>Food, Food, Food, Food, Food, Food, Food, Food, Food</h4>
          </Grid>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              style={{
                textAlign: 'right',
                paddingRight: '30px',
                marginBottom: '10px',
              }}
            >
              <Button
                variant="contained"
                size="medium"
                endIcon={<Icon>arrow_right_alt</Icon>}
                style={{
                  backgroundColor: '#6B82F8',
                  color: 'white',
                  borderRadius: '26px',
                }}
              >
                View Full Menu
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MessMenu;
