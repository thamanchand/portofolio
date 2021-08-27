import React from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import colors from '../Constants/Colors';
import { HTMLIcon } from '../Constants/Images';
import { CSSIcon } from '../Constants/Images';
import { ReactIcon } from '../Constants/Images';
import { ReduxIcon } from '../Constants/Images';
import { ReduxSagaIcon } from '../Constants/Images';
import { JavaScriptIcon } from '../Constants/Images';
import { ES6Icon } from '../Constants/Images';
import { SASSIcon } from '../Constants/Images';
import { MaterialUIIcon } from '../Constants/Images';
import { BootstrapIcon } from '../Constants/Images';
import { CypressIcon } from '../Constants/Images';
import { FlowIcon } from '../Constants/Images';
import { Python } from '../Constants/Images';
import { Django } from '../Constants/Images';
import { MongoDB } from '../Constants/Images';
import { PostgreSQL } from '../Constants/Images';
import { Nodejs } from '../Constants/Images';
import { Sphinx } from '../Constants/Images';
import { Flask } from '../Constants/Images';
import { Nginx } from '../Constants/Images';
import { Apache } from '../Constants/Images';
import { StorybookIcon } from '../Constants/Images';

import { BitIcon } from '../Constants/Images';
import { PHP } from '../Constants/Images';
import { Scrapy } from '../Constants/Images';
import { Strapi } from '../Constants/Images';
import { Docker } from '../Constants/Images';
import { Jenkins } from '../Constants/Images';
import { Webpack } from '../Constants/Images';
import { Digitalocean } from '../Constants/Images';
import { Netlify } from '../Constants/Images';
import { NPM } from '../Constants/Images';
import { SSH } from '../Constants/Images';
import { CLI } from '../Constants/Images';
import { Version } from '../Constants/Images';
import { Google } from '../Constants/Images';
import { Gunicorn } from '../Constants/Images';
import { AWS } from '../Constants/Images';
import { Heroku } from '../Constants/Images';


const frontedIcons = [
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  ReactIcon,
  ReduxIcon,
  ReduxSagaIcon,
  ES6Icon,
  SASSIcon,
  StorybookIcon,
  MaterialUIIcon,
  BootstrapIcon,
  CypressIcon,
  FlowIcon,
  BitIcon,
];

const backendIcons = [
  Strapi,
  Python,
  Django,
  MongoDB,
  PostgreSQL,
  Nodejs,
  Apache,
  Nginx,
  Sphinx,
  Flask,
  SSH,
  PHP,
  Scrapy
];

const toolsIcons = [
  CLI,
  Version,
  Docker,
  AWS,
  Jenkins,
  Webpack,
  Digitalocean,
  Heroku,
  Netlify,
  NPM,
  SSH,
  Google,
  Gunicorn,
];

const frontend = [
  {type: "HTML", level: 100},
  {type: "CSS/SASS", level: 92},
  {type: "JavaScript/ES6", level: 75},
  {type: "React", level: 80},
  {type: "Typescript", level: 60},
  {type: "Redux", level: 80},
  {type: "Redux-Saga", level: 76},
  {type: "Selector", level: 75},
  {type: "ImmutableJS", level: 60},
  {type: "Storybook", level: 75},
  {type: "Material UI", level: 78},
  {type: "Bootstrap", level: 85},
  {type: "Cypress", level: 65},
  {type: "Flow", level: 45},

];

const backend = [
  {type: "Strapi", level: 75},
  {type: "Python", level: 65},
  {type: "Django", level: 65},
  {type: "Django Rest framework", level: 65},
  {type: "Flask", level: 55},
  {type: "Scrapy", level: 40},
  {type: "MongoDB", level: 65},
  {type: "PostgreSQL", level: 65},
  {type: "PHP", level: 45},
  {type: "Sphinx", level: 45},
  {type: "Solr", level: 40},
  {type: "Apache", level: 60},
  {type: "Nginx", level: 60},
  {type: "SSL", level: 55},
];

const tools = [
  {type: "Version control", level: 70},
  {type: "CI/CD", level: 65},
  {type: "Jenkins", level: 65},
  {type: "NPM/Yarn", level: 55},
  {type: "Webpack", level: 40},
  {type: "Docker", level: 65},
  {type: "Heroku/Digitalocean", level: 65},
  {type: "AWS", level: 50},
  {type: "Netlify", level: 40},
  {type: "SSH", level: 50},
  {type: "Google", level: 55},
  {type: "Gunicorn", level: 60},
  {type: "Supervisor", level: 50},
  {type: "awk/grep/tail", level: 40},


];

const Style = makeStyles(theme => ({
  container: {
    padding: '3rem 1rem',
    position: 'relative',
    display: 'flex',
    minHeight: '60vh',
    flexDirection: 'column',
    backgroundColor: colors.backgroundLite,
    '@media (max-width:1200px)': {
      paddingLeft: '3rem',
      paddingRight: '1rem'
    }
  },
  skills: {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },

  card: {
    maxWidth: 400,
    margin: '1.5rem auto',
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: '24px'
  },
  divider: {
    margin: "12px 0"
  },
  skillHeader: {
    fontWeight: "bold",
    fontSize: '1rem',
    padding: '10px 0px'
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: "-8px"
    }
  },
  headerText: {
    textAlign: 'center',
  },
  headerSubtitle: {
    textAlign: 'center',
    color: colors.paragraph,
    marginBottom: '3rem',
  },
  skillImage: {
  },
  skillset: {
    margin: "0 0 30px 0",
    padding: '0px',
    width: 'calc(100% - 50px)',
  },
  skillsetItem: {
    display: 'block',
    position: 'relative',
    backgroundColor: '#888',
    color: "#fff",
    margin: "10px 0",
    transition: "width 300ms ease-in-out",
    listStyle: "none",
  },
  label: {
    padding: "5px",
    margin: "0",
    fontWeight: "bold",
    fontSize: "0.7rem"
  },
  span: {
    position: "absolute",
    right: "10px",
    display: "inline-block",
    width: "30px",
    top: "6px",
    textAlign: "right",
    fontWeight: "normal",
    color: "#fff",
    fontSize: "10px",
  }
}));

function Skills({ classes }) {
  const style = Style();
  const hue = "0";
  const saturation = "0";
  return (
    <div className={style.container}>
      <Typography variant="h5" className={style.headerText}>MY SKILLS</Typography>
      <Typography variant="body1" className={style.headerSubtitle}>I do all kind of neat stuff</Typography>
      <div className={style.skills}>
        <Card className={style.card}>
          <CardContent className={style.content} >
            <Typography
              className={style.skillHeader}
              variant={"h5"}
              gutterBottom

            >
              FRONTEND
            </Typography>
            <ul className={style.skillset}>
              {frontend.map((skill, index) =>
                <li
                  className={style.skillsetItem}
                  key={skill.type}
                  style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${11 }%)` }}
                >
                  <p className={style.label}>{skill.type}<span className={style.span}>{skill.level}</span></p>
                </li>
              )}
            </ul>

            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              In Frontend, my focus is to create aesthetic and responsive design.
            </Typography>
            <Divider className={style.divider} light />
            {frontedIcons.map(face => (
              <Avatar className={style.avatar} key={face} src={face} />
            ))}
          </CardContent>
        </Card>

        <Card className={style.card}>
          <CardContent className={style.content} >
            <Typography
              className={style.skillHeader}
              variant={"h5"}
              gutterBottom

            >
              BACKEND
            </Typography>
            <ul className={style.skillset}>
              {backend.map((skill, index) =>
                <li
                  className={style.skillsetItem}
                  key={skill.type}
                  style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${11 }%)` }}
                >
                  <p className={style.label}>{skill.type}<span className={style.span}>{skill.level}</span></p>
                </li>
              )}
            </ul>

            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
             I write clean, readable & reusable code. Less is more is my philosophy!
            </Typography>
            <Divider className={style.divider} light />
            {backendIcons.map(face => (
              <Avatar className={style.avatar} key={face} src={face} />
            ))}
          </CardContent>
        </Card>

        <Card className={style.card}>
          <CardContent className={style.content} >
            <Typography
              className={style.skillHeader}
              variant={"h5"}
              gutterBottom

            >
              TOOLS
            </Typography>
            <ul className={style.skillset}>
              {tools.map((skill, index) =>
                <li
                  className={style.skillsetItem}
                  key={skill.type}
                  style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${11 }%)` }}
                >
                  <p className={style.label}>{skill.type}<span className={style.span}>{skill.level}</span></p>
                </li>
              )}
            </ul>

            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              Above mentioned tools are lifeblood in design & development.
            </Typography>
            <Divider className={style.divider} light />
            {toolsIcons.map(face => (
              <Avatar className={style.avatar} key={face} src={face} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
