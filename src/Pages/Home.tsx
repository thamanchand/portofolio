import * as React from 'react';
import { Link } from 'react-router-dom';

import { ProfileBW } from '../Constants/Images';

import { Grid, Typography, Button } from '@material-ui/core';
import { HomeStyle } from '../Style/Index';
const Home: React.FunctionComponent<{}> = () => {
  const style = HomeStyle();
  return (
    <div className={style.bodyContainer}>
      <Grid container>
        <Grid item sm={12} md={7} lg={7} className={style.authorInfoContainer}>
          <Typography variant="h4" className={style.infoHeader}>
            DESIGN<sup>. </sup> DEVELOP<sup>.</sup>
          </Typography>
          <Typography variant="h4" className={style.infoHeader}>
            DELIVER<sup>. </sup>SCALE<sup>. </sup>
          </Typography>
          <Typography variant="subtitle1" className={style.infoText}>
            Hello,<br />
            I’m Thaman Chand. I have more than 8+ years of experience in web applications design and development.
            I have worked on a variety companies both medium and small. My core
            objective is to build products that deliver results, drive people and organisation performance.
          </Typography>
          <div className={style.buttonContainer}>
            <Link to="/contact" className={style.link}>
              <Button className={style.hireMeButton}>HIRE ME NOW</Button>
            </Link>
          </div>
        </Grid>
        <Grid item sm={12} md={4} lg={4} className={style.imageContainer}>
          <img src={ProfileBW} alt="man" className={style.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
