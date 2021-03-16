import React from 'react';
import { makeStyles, Modal, IconButton } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import { Close } from '@material-ui/icons';
import image from '../../assets/Home/Announcements/image.svg';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    width: '800px',
    position: 'absolute',
    left: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      left: '0%',
    },
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    overflowY: 'auto',
  },
  btnContainer: {
    alignSelf: 'flex-end',
  },
  img: {
    maxWidth: '100%',
    objectFit: 'contain',
    textAlign: 'center',
  },
}));

const ReadMoreModal = ({ modal, setModal }) => {
  const classes = useStyles();
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="read-more-modal"
        aria-describedby="read-more-modal-description"
        className={classes.modal}
      >
        <AnimatePresence>
          {modal && (
            <motion.div
              className={classes.paper}
              initial={{ translateY: '100%' }}
              exit={{ translateY: '100%' }}
              animate={{ translateY: '0%' }}
            >
              <div className={classes.btnContainer}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  <Close />
                </IconButton>
              </div>
              <h4 id="read-more-modal-title">
                Perfect for Small & Medium Businesses in India ,Samsung Launches
                New Range of UHD Business TVs
              </h4>
              <img src={image} className={classes.img} alt="headline-img" />
              <p id="read-more-modal-description">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
};

export default ReadMoreModal;
