import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.footerContainer}`}>
      <p className="m-0">© Copyright Rimel 2022. All rights reserved.</p>
    </div>
  )
}

export default Footer
