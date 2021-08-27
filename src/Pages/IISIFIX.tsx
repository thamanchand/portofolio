import * as React from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import clsx from 'clsx';

import { PerukirjakoneImg } from '../Constants/Images';
import { Peruguideline } from '../Constants/Images';
import { Peruwizard } from '../Constants/Images';

import { Grid, Typography } from '@material-ui/core';
import { Workdetails } from '../Style/Index';

const IISIFIXI = () => {
  const style = Workdetails();
  return (
    <div className={style.root}>
      <div className={style.container}>
        <Typography variant="h6" className={style.headerText}>PERUKIRJAKONE</Typography>
        <a href="https://www.perukirjakone.fi" target="_blank" className={style.projectLink}>
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
              Perukirajone wants to revolutionize how last wills are created, disrupting legal
              contracts with the help of the technology. I helped Perukirjakone team to realised their
              dream.
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
                    primary="- UI/UX"
                    className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Record last will via wizard form"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Generate PDF from document"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Send email"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Create account/resend validation code"
                     className={style.listItemSpecs}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                     primary="- Access document with email & code"
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
            image={PerukirjakoneImg}
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
              Automating legal contract especially person's last will is not an easy job. There
              were more than 100+ inputs, add/remove fields feature. Handling these trendemous inputs smoothly on the fly was the
              corner stone of the product success.
              We research all possible inputs, categorised them and based on relevance, organise inputs into
              wizard form (stepper). The end result was functional, user can fill limited number of fields at a given
              time, transition to next step flawleslly.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default IISIFIXI;
