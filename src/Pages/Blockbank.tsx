import * as React from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import clsx from 'clsx';

import {  BlockbankLogo, BlockbankHeadings, BlockbankColor } from '../Constants/Images';

import { Grid, Typography } from '@material-ui/core';
import { Workdetails } from '../Style/Index';

const Blockbank = () => {
  const style = Workdetails();
  return (
    <div className={style.root}>
      <div className={style.container}>
        <Typography variant="h6" className={style.headerText}>BLOCKBANK</Typography>
        <a href="https://blockbank.fi" target="_blank" className={style.projectLink}>
          <Typography variant="h6" >Visit</Typography>
        </a>
      </div>
      <React.Fragment>
      <Grid
        container
        alignItems="stretch"
        className={style.containerOne}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Paper className={clsx(style.paper, style.background)}>
            <Typography variant="h2" className={style.projectHeader}>Project summary</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Paper className={clsx(style.paper, style.background)}>
            <Typography variant="h4" className={style.projectDesc}>
              Blockbank is a blockchain powered solution for digital law contracts. Testamenttikeskus.fi national ledger of specific law contracts is verified monthly on the Bitcoin blockchain (checksum) for the database and all new entries are verified in the same manner to ensure the soundness of the data.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={clsx(style.paper, style.background)}>

            <Typography variant="h6" className={style.listHeader}>
             Development Team
            </Typography>
            <div>
             <List>
               <ListItem>
                  <ListItemText
                    primary="1"
                    className={style.listItem}
                  />
                </ListItem>
             </List>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={clsx(style.paper, style.background)}>
            <Typography variant="h6" className={style.listHeader}>
              Duration
            </Typography>
            <div>
             <List>
               <ListItem>
                  <ListItemText
                    primary="3 months"
                    className={style.listItem}
                  />
                </ListItem>
             </List>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={clsx(style.paper, style.background)}>
            <Typography variant="h6" className={style.listSpecHeader}>
              Specifications
            </Typography>
            <div>
             <List>
               <ListItem>
                  <ListItemText
                    primary="- Branding"
                    className={style.listItemSpecs}
                  />
                </ListItem>
               <ListItem>
                  <ListItemText
                    primary="- UI/UX"
                    className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- CMS"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Blog post"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Subscribe"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Signup"
                     className={style.listItemSpecs}
                  />
                </ListItem>
               
             </List>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={clsx(style.paper, style.background)}>
            <Typography variant="h6" className={style.listSpecHeader}>
              Technology
            </Typography>
            <div>
             <List>
               <ListItem>
                  <ListItemText
                    primary="- React.js"
                    className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Netlify"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Netlify CMS"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Material design"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- HTML/CSS"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- JAMSTACK"
                     className={style.listItemSpecs}
                  />
                </ListItem>
             </List>
            </div>
          </Paper>
        </Grid>
        <Grid
          item xs={12} sm={12} md={12} lg={12} className={style.cardGrid}
        >
          <Typography variant="h4" className={style.brandingHeader}>Branding</Typography>
          <Typography variant="h6" className={style.brandingText}>
            Black and blue colors were selected based on the research user persona.
          </Typography>
          <CardMedia
            component="img"
            alt="Blockbank"
            image={BlockbankLogo}
            title="Blockbank"
            className={style.media}
          />
          <Typography variant="h4" className={style.brandingHeader}>Typography</Typography>
          <CardMedia
            component="img"
            alt="Blockbank"
            image={BlockbankHeadings}
            title="Blockbank"
            className={style.media}
          />
          <Typography variant="h4" className={style.brandingHeader}>Colors</Typography>
          <CardMedia
            component="img"
            alt="Blockbank"
            image={BlockbankColor}
            title="Blockbank"
            className={style.media}
          />
        </Grid>
      </Grid>
    </React.Fragment>
    </div>
  );
};

export default Blockbank;
