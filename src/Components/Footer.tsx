import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
  LocationOnOutlined,
  PhoneIphoneOutlined,
  EmailOutlined,
  HomeOutlined
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Github, LinkedIn, Twitter } from '../Constants/Images';

import { LogoTransparent } from '../Constants/Images';
import colors from '../Constants/Colors';

const Style = makeStyles(theme => ({
  container: {
    backgroundColor: colors.darkBlack,
    color: colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  footerHeader: {
    marginBottom: '1.5rem',
    fontWeight: 'bold'
  },
  footerText: {
    marginBottom: '0.5rem'
  },
  footerContainer: {
    padding: '2rem'
  },
  socialButtonContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center'
  },
  socialButton: {
    height: '40px',
    width: '40px',
    backgroundColor: colors.snow,
    borderRadius: 20,
    marginLeft: '1rem',
    transition: 'all 200ms ease-in',
    '&:hover': {
      backgroundColor: colors.themeColor
    }
  },
  copyrightContainer: {
    backgroundColor: colors.darkBlack,
    padding: '1rem',
    textAlign: 'center'
  },
  copyrightText: {
    fontWeight: 'bold',
    color: colors.snow
  },
  image: {
    height: '109px'
  },
  detailContainer: {
    flexDirection: 'row',
    display: 'flex',
    marginBottom: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailTitle: {
    color: colors.snow
  },
  linkText: {
    color: colors.snow,
    marginLeft: '0.5rem',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  icon: {
    color: colors.snow,
    marginRight: '0.5rem'
  },
  github: {
    height: '25px',
    filter: 'invert(85%) sepia(100%) saturate(0%) hue-rotate(100deg) brightness(116%) contrast(100%)',
    marginRight: '9px'
  },
  linkedin: {
    height: '25px',
    filter: 'invert(85%) sepia(100%) saturate(0%) hue-rotate(100deg) brightness(116%) contrast(100%)',
    marginRight: '9px'
  },
  mail: {
    color: "#FFF",
    textDecoration: "none",
    '&:hover': {
      textDecoration: "none",
    }
  }

}));
const Footer: React.FC = () => {
  const style = Style();
  return (
    <div>
      <Grid container className={style.container}>
        <Grid item xs={12} lg={4} className={style.footerContainer}>
          <img src={LogoTransparent} alt="logo" className={style.image} />
        </Grid>
        <Grid item xs={12} lg={4} className={style.footerContainer}>
          <Typography variant="body1" className={style.footerHeader}>
            CONNECT
          </Typography>
          <div className={style.socialButtonContainer}>
            <a href="https://github.com/thamanchand" target="_blank">
              <img src={Github} alt="github" className={style.github} />
            </a>
            <a href="https://www.linkedin.com/in/thamanchand/" target="_blank">
              <img src={LinkedIn} alt="linkedin" className={style.linkedin} />
            </a>
            <a href="https://twitter.com/In2Startup" target="_blank">
              <img src={Twitter} alt="linkedin" className={style.linkedin} />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} className={style.footerContainer}>
          <Typography variant="body1" className={style.footerHeader}>
            CONTACT
          </Typography>

          <div className={style.detailContainer}>
            <EmailOutlined className={style.icon} />
            <Typography variant="subtitle2" className={style.linkText}>
              <a href="mailto:thaman.me@gmail.com" className={style.mail}>
                thaman.me@gmail.com
              </a>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
