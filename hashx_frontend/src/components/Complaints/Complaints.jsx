import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { secondaryColor } from '../../theme/theme';

const Complaints = () => {
  return (
    <>
      <Grid item xs={12} style={{ marginTop: '50px' }}>
        <Paper
          elevation={3}
          style={{
            //   width: "550px",
            borderRadius: '20px',

            backgroundColor: `${secondaryColor}`,
            color: '#FBF9FF',
            marginTop: '-30px',
          }}
        >
          <br />
          <h2 style={{ fontWeight: '400', paddingLeft: '20px' }}>Complaints</h2>
          <Grid container spacing={2} style={{ paddingLeft: '20px' }}>
            <Grid item xs={12}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut fend donec pretium vulputate sapien.
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              style={{ textAlign: 'right', paddingRight: '20px' }}
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
                Post a Complaint
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Complaints;
