import * as React from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import clsx from 'clsx';

import { MuuvzBg } from '../Constants/Images';
import { Peruguideline } from '../Constants/Images';
import { Peruwizard } from '../Constants/Images';

import { Grid, Typography } from '@material-ui/core';
import { Workdetails } from '../Style/Index';

const Testamenttikone = () => {
  const style = Workdetails();
  return (
    <div className={style.root}>
      <div className={style.container}>
        <Typography variant="h6" className={style.headerText}>Muuvz</Typography>
        <a href="https://www.perukirjakone.fi" rel="noopener noreferrer" target="_blank" className={style.projectLink}>
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
              Muuvz is my own side project. It's a marketplace to search, compare, book moving vans. It was created of my necessity while I was moving from Turku to Helsinki.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={clsx(style.paper, style.background)}>

            <Typography variant="h6" className={style.listHeader}>
              Team
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
                    primary="- User (mover) dashboard"
                    className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Moving company dashboard"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Search moving vans"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- List moving vans"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Booking moving vans"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Manage listing of moving vans"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                 <ListItem>
                     <ListItemText
                         primary="- Add, Modify, Delete moving vans"
                         className={style.listItemSpecs}
                     />
                 </ListItem>
                 <ListItem>
                     <ListItemText
                         primary="- Show vans availability on calendar"
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
                     primary="- React final form"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Bulma"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Axios"
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
                     primary="- Sendgrid"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Strapi"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                 <ListItem>
                     <ListItemText
                         primary="- React Calendar"
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
            The first thing I did was to create branding based on the research carried out by
            company on product and user persona. I choosed light <b>black</b>, <b>turquoise</b>, <b>gray</b> and <b>white</b> colors as the main colors.
          </Typography>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={Peruguideline}
            title="Contemplative Reptile"
            className={style.media}
          />
          <Typography variant="h4" className={style.brandingHeader}>Hero section</Typography>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={MuuvzBg}
            title="Contemplative Reptile"
            className={style.media}
          />
          <Typography variant="h4" className={style.brandingHeader}>Wizard</Typography>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={Peruwizard}
            title="Contemplative Reptile"
            className={style.media}
          />
        </Grid>
      </Grid>
    </React.Fragment>
      <Grid
        container
        alignItems="stretch"
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Paper className={style.paper}>
            <Typography variant="h2" className={style.challengeHeader}>Challenges</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Paper className={style.paper}>
            <Typography className={style.challengeDesc}>
              Building moving vans marketplace was challenging at the same time fun. I learned a lot. Project is still under development and will be released soon.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testamenttikone;
