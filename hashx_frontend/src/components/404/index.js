import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
const Page404 = () => {
  return (
    <>
      <Link to="/">
        <div className={styles.root}>
          <div className={styles.text}>
            <p>404</p>
          </div>
          <div className={styles.container}>
            <div className={styles.caveman}>
              <div className={styles.leg}>
                <div className={styles.foot}>
                  <div className={styles.fingers} />
                </div>
              </div>
              <div className={styles.leg}>
                <div className={styles.foot}>
                  <div className={styles.fingers} />
                </div>
              </div>
              <div className={styles.shape}>
                <div className={styles.circle} />
                <div className={styles.circle} />
              </div>
              <div className={styles.head}>
                <div className={styles.eye}>
                  <div className={styles.nose} />
                </div>
                <div className={styles.mouth} />
              </div>
              <div className={styles.armRight}>
                <div className={styles.club} />
              </div>
            </div>
            <div className={styles.caveman}>
              <div className={styles.leg}>
                <div className={styles.foot}>
                  <div className={styles.fingers} />
                </div>
              </div>
              <div className={styles.leg}>
                <div className={styles.foot}>
                  <div className={styles.fingers} />
                </div>
              </div>
              <div className={styles.shape}>
                <div className={styles.circle} />
                <div className={styles.circle} />
              </div>
              <div className={styles.head}>
                <div className={styles.eye}>
                  <div className={styles.nose} />
                </div>
                <div className={styles.mouth} />
              </div>
              <div className={styles.armRight}>
                <div className={styles.club} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Page404;
