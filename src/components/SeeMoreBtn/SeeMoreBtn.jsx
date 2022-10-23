import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import styles from './SeeMoreBtn.module.css';

function SeeMoreBtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className={styles.btn}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See more
      </Button>
      <div style={{ minHeight: '20px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '250px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default SeeMoreBtn;