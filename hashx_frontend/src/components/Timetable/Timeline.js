import React from 'react';
import './styles.css';
import { Grid, Paper } from '@material-ui/core';

const Timeline = () => {
  return (
    <>
      <Grid item xs={12}>
        <div class="container">
          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <Paper elevation={2} className="paper">
                <div style={{ marginLeft: '40px' }}>
                  <h3>First Year</h3>
                  <span>Some work experience</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </p>
                </div>
              </Paper>
            </div>
          </div>

          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Seconed Year</h3>
              <span>Some work experience</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
          </div>

          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Third Year</h3>
              <span>Some work experience</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
          </div>

          <div class="timeline-block timeline-block-left">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Fourth Year</h3>
              <span>Some work experience</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
          </div>

          <div class="timeline-block timeline-block-right">
            <div class="marker"></div>
            <div class="timeline-content">
              <h3>Fifth Year</h3>
              <span>Some work experience</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Timeline;
