import React, { useState } from 'react';
import { makeStyles, Modal, Slide } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ReadMoreModal = ({ open, setOpen }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="read-more-modal"
        aria-describedby="read-more-modal-description"
        className={classes.modal}
        closeAfterTransition
      >
        {/* <Slide direction="up" in={open}> */}
        <AnimatePresence>
          {open && (
            <motion.div
              className={classes.paper}
              initial={{ translateY: '100%' }}
              exit={{ translateY: '100%' }}
              animate={{ translateY: '0%' }}
            >
              <h2 id="read-more-modal-title">Announcement Title</h2>
              <p id="read-more-modal-description">
                Perfect for Small & Medium Businesses in India ,Samsung Launches
                New Range of UHD Business TVs
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* </Slide> */}
      </Modal>
    </>
  );
};

export default ReadMoreModal;
