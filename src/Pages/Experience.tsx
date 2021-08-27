import React from 'react';
import { ExperienceStyle } from '../Style/Index';
import { Typography } from '@material-ui/core';
import {
  DeveloperBoardOutlined,
  CollectionsOutlined,
  CreditCardOutlined
} from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import Slider from '../Components/Slider';
import { Invian } from '../Constants/Images';
import { UTU } from '../Constants/Images';
import { NorthCatalyst } from '../Constants/Images';
import { NVF } from '../Constants/Images';
import { crowdTOD } from '../Constants/Images';
import { Bioscience } from '../Constants/Images';
import colors from '../Constants/Colors';

const Experience: React.FC<{}> = () => {
  const style = ExperienceStyle();
  return (
    <div className={style.container}>
      <Typography variant="h6" className={style.yearsHeader}>8 YEARS EXPERIENCE</Typography>
      <div>
        <div className={style.experienceBlock}>
          <div className={style.companyInfo}>
            <Typography variant="subtitle2" className={style.year}>
              May 2017 - CURRENT
            </Typography>
            <Typography variant="subtitle2" className={style.company}>
              Invian Oy, Espoo
            </Typography>
          </div>
          <div className={style.content}>
            <Typography variant="body1" className={style.contentHeader}>
              Frontend Engineer
            </Typography>
            <Typography variant="body2" className={style.contentBody}>
            Responsbile for building Enterprise Resource planning  (ERP) design
            system, storybook, internal components, booking & map features, hiring
            & managing freelancers.

            </Typography>
            <div className={style.skillTags}>
              <Chip
                label="React"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Redux"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Saga"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Selector"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Cypress"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Flow"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Storybook"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Design system"
                color="inherit"
                className={style.tag}
              />
            </div>
          </div>
          <div className={style.line} />
          <div className={style.iconContainer}>
            <Avatar src={Invian} alt="Invian Oy" className={style.icon} />
          </div>
        </div>
        <div className={style.experienceBlock}>
          <div className={style.companyInfo}>
            <Typography variant="subtitle2" className={style.year}>
              Jan 2016 - April 2017
            </Typography>
            <Typography variant="subtitle2" className={style.company}>
              University of Turku
            </Typography>
          </div>
          <div className={style.content}>
            <Typography variant="body1" className={style.contentHeader}>
              IT-Designer
            </Typography>
            <Typography variant="body2" className={style.contentBody}>
              I played key role in building Employee management system for the University of Turku.

            </Typography>
            <div className={style.skillTags}>
              <Chip
                label="Python"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Django"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="DRF"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="AngularJS"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Bootstrap"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Nginx"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Supervisor"
                color="inherit"
                className={style.tag}
              />
            </div>
          </div>
          <div className={style.line} />
          <div className={style.iconContainer}>
            <Avatar src={UTU} className={style.icon} />
          </div>
        </div>
        <div className={style.experienceBlock}>
          <div className={style.companyInfo}>
            <Typography variant="subtitle2" className={style.year}>
              July 2015 - Jan 2016
            </Typography>
            <Typography variant="subtitle2" className={style.company}>
              NorthCatalyst, Turku
            </Typography>
          </div>
          <div className={style.content}>
            <Typography variant="body1" className={style.contentHeader}>
              Chief Technology Officer
            </Typography>
            <Typography variant="body2" className={style.contentBody}>
              Northcatalyst was founded to deliver immersive e-learning solution to drive people and organisation performance. I was one of the co-founder and CTO.  I helped startup to build learning management system (LMS).
            </Typography>
            <div className={style.skillTags}>
              <Chip
                label="Python"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Django"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="DRF"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="JavaScript"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Bootstrap"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Nginx"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Digitalocean"
                color="inherit"
                className={style.tag}
              />
            </div>
          </div>
          <div className={style.line} />
          <div className={style.iconContainer}>
            <Avatar src={NorthCatalyst} className={style.icon} />
          </div>
        </div>

        <div className={style.experienceBlock}>
          <div className={style.companyInfo}>
            <Typography variant="subtitle2" className={style.year}>
              May 2014 - Oct 2014
            </Typography>
            <Typography variant="subtitle2" className={style.company}>
              NVF, Turku
            </Typography>
          </div>
          <div className={style.content}>
            <Typography variant="body1" className={style.contentHeader}>
              FullStack Developer
            </Typography>
            <Typography variant="body2" className={style.contentBody}>
              I was assigned to designed and developed Video content management system.
              </Typography>
            <div className={style.skillTags}>
              <Chip
                label="Python"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Django"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="DRF"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="JavaScript"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Bootstrap"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Nginx"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Digitalocean"
                color="inherit"
                className={style.tag}
              />
            </div>
          </div>
          <div className={style.line} />
          <div className={style.iconContainer}>
            <Avatar src={NVF} className={style.icon} />
          </div>
        </div>

        <div className={style.experienceBlock}>
          <div className={style.companyInfo}>
            <Typography variant="subtitle2" className={style.year}>
              August 2013 - July 2014
            </Typography>
            <Typography variant="subtitle2" className={style.company}>
              crowdTOD, Turku
            </Typography>
          </div>
          <div className={style.content}>
            <Typography variant="body1" className={style.contentHeader}>
              Chief Technology Officer
            </Typography>
            <Typography variant="body2" className={style.contentBody}>
              A crowd based platform to request, fund and create a tutorials (on web development, hardware, photography, music, graphic and video).
              </Typography>
            <div className={style.skillTags}>
              <Chip
                label="Python"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Django"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="DRF"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="JavaScript"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="HTML"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="CSS"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="JQuery"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Nginx"
                color="inherit"
                className={style.tag}
              />
            </div>
          </div>
          <div className={style.line} />
          <div className={style.iconContainer}>
            <Avatar src={crowdTOD} className={style.icon} />
          </div>
        </div>

        <div className={style.experienceBlock}>
          <div className={style.companyInfo}>
            <Typography variant="subtitle2" className={style.year}>
              April 2012 - April 2013
            </Typography>
            <Typography variant="subtitle2" className={style.company}>
              Bioscience Turku
            </Typography>
          </div>
          <div className={style.content}>
            <Typography variant="body1" className={style.contentHeader}>
              Research Assistant
            </Typography>
            <Typography variant="body2" className={style.contentBody}>
              Bioscience Turku proteomics department was in need of web application to
              identify proteins & peptides in a sample. I assisted them by desigining
              and implementing application.
            </Typography>
            <div className={style.skillTags}>
              <Chip
                label="Python"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Django"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="R"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="JavaScript"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="HTML"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="CSS"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="JQuery"
                color="inherit"
                className={style.tag}
              />
              <Chip
                label="Nginx"
                color="inherit"
                className={style.tag}
              />
            </div>
          </div>
          <div className={style.iconContainer}>
            <Avatar src={Bioscience} className={style.icon} />
          </div>
        </div>

      </div>
      <Slider />
    </div>
  );
};

export default Experience;
