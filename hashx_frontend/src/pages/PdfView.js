import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const PdfView = () => {
  let history = useHistory();

  return (
    <>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ArrowBackIcon />}
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <iframe
            src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            width="100%"
            height="700px"
            title="pdf"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
};

export default PdfView;
