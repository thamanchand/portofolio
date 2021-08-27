import { makeStyles } from '@material-ui/core';
import colors from '../Constants/Colors';
const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: colors.backgroundLite,
    padding: '2rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width:770px)': {
      padding: '1rem 0.5rem',
      height: '100%',
    },
  },
  headerText: {
    color: colors.black,
    fontWeight: 'bold'
  },

  projectHeader: {
    color: '#FFF',
    [theme.breakpoints.up("xs")]: {
      fontSize: '2rem',
      marginTop: '2rem',
      fontWeight: 'bold',
      float: 'left'

    },
    [theme.breakpoints.up("sm")]: {
      fontSize: '2rem',
      margin: '9rem 0',
      fontWeight: 'bold',
      textAlign: 'left'

    },
    [theme.breakpoints.up("md")]: {
      fontSize: '2.5rem',
      margin: '9rem 9rem',
      fontWeight: 'bold',
      padding: '1rem'
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: '3rem',
      margin: '9rem 9rem',
      fontWeight: 'bold',
      padding: '1rem'
    }
  },
  challengeHeader: {
    color: '#1C1C1C',
    [theme.breakpoints.up("xs")]: {
      fontSize: '2rem',
      marginTop: '2rem',
      fontWeight: 'bold'

    },
    [theme.breakpoints.up("sm")]: {
      fontSize: '2rem',
      margin: '9rem',
      fontWeight: 'bold',
      textAlign: 'left'

    },
    [theme.breakpoints.up("md")]: {
      fontSize: '2.5rem',
      margin: '9rem 9rem',
      fontWeight: 'bold',
      padding: '1rem'
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: '3rem',
      margin: '9rem 9rem',
      fontWeight: 'bold',
      padding: '1rem'
    }
  },
  projectDesc: {
    color: "#fff",
    textAlign: "left",
    [theme.breakpoints.up("xs")]: {
      fontSize: '1rem',
      marginTop: '1rem',
      textAlign: 'left'

    },
    [theme.breakpoints.up("sm")]: {
      fontSize: '1rem',
      marginTop: '8rem',
      padding: '1rem',
      textAlign: 'left'

    },
    [theme.breakpoints.up("md")]: {
      fontSize: '1.2rem',
      marginTop: '8rem',
      fontWeight: 'bold',
      padding: '1rem',
      textAlign: 'left'
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: '1.25rem',
      marginTop: '9rem',
      padding: '1rem',
      textAlign: 'left'
    }
  },
  challengeDesc: {
    color: "#666666",
    textAlign: "left",
    [theme.breakpoints.up("xs")]: {
      padding: '1rem',
      fontSize: '1rem',
      marginTop: '0rem',
      textAlign: 'justify',
      fontWeight: 'normal'

    },
    [theme.breakpoints.up("sm")]: {
      padding: '1rem',
      fontSize: '1rem',
      marginTop: '2rem',
      textAlign: 'justify',
      fontWeight: 'normal'

    },
    [theme.breakpoints.up("md")]: {
      padding: '1rem',
      fontSize: '1rem',
      marginTop: '6rem',
      textAlign: 'justify',
      fontWeight: 'normal'
    },
    [theme.breakpoints.up("lg")]: {
      padding: '1rem',
      fontSize: '1rem',
      marginTop: '5rem',
      textAlign: 'justify',
      fontWeight: 'normal',
    }
  },
  headerSubtitle: {
    color: colors.paragraph,
    marginBottom: '3rem',
  },
  bodyContainer: {
    backgroundColor: '#F5F5F5',
    display: 'flex',
    minHeight: '60vh',
    flexDirection: 'column',
  },
  imageContainer: {
    flexGrow: 1,
    textAlign: 'center'
  },
  image: {
    maxHeight: '600px',
    height: 'auto',
    marginTop: '5rem',
    '@media (max-width:768px)': {
      maxHeight: '400px',
      marginTop: '0rem',
    }
  },
  authorInfoContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 2.5rem'
  },
  infoHeader: {
    fontWeight: 'bold',
    color: colors.black,
    '@media (max-width:769px)': {
      textAlign: 'center',
    }
  },
  infoText: {
    color: colors.paragraph,
    margin: '1.5rem 0'
  },
  hireMeButton: {
    backgroundColor: colors.themeColor,
    padding: '0.5rem 2rem',
    color: colors.snow,
    marginBottom: '1rem',
    '&:hover': {
      backgroundColor: colors.themeColor
    }
  },
  buttonContainer: {
    '@media (max-width:769px)': {
      textAlign: 'center',
    }
  },
  media: {
    borderRadius: '6px',
    margin: '2rem 0 3rem 0'
  },
  cardGrid: {
    padding: '10rem',
    [theme.breakpoints.up("xs")]: {
      padding: '1rem',

    },
    [theme.breakpoints.up("sm")]: {
      padding: '1rem',

    },
    [theme.breakpoints.up("md")]: {
      padding: '10rem',
    },

  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: '#F5F5F5'
  },
  background: {
    backgroundColor: '#1C1C1C',
    marginBottom: '2rem'
  },
  containerOne: {
    backgroundColor: "#1c1c1c",
    flexGrow: 1
  },
  listItem: {
    textAlign: 'center',
    color: '#FFF',
    marginLeft: '-15px',
    [theme.breakpoints.up("xs")]: {
      textAlign: 'left',

    },
    [theme.breakpoints.up("sm")]: {
      textAlign: 'left',

    },
    [theme.breakpoints.up("md")]: {
      textAlign: 'center',
    },
  },
  listItemSpecs: {
    textAlign: 'left',
    color: '#FFF',
    marginLeft: '-15px',
    marginBottom: '-15px',
    [theme.breakpoints.up("xs")]: {
      textAlign: 'left',

    },
    [theme.breakpoints.up("sm")]: {
      textAlign: 'left',

    },
    [theme.breakpoints.up("md")]: {
      textAlign: 'left',
    },
  },
  listSpecHeader: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'left',
    [theme.breakpoints.up("xs")]: {
      textAlign: 'left',

    },
    [theme.breakpoints.up("sm")]: {
      textAlign: 'left',

    },
    [theme.breakpoints.up("md")]: {
      textAlign: 'left',
    },
  },
  listHeader: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    [theme.breakpoints.up("xs")]: {
      textAlign: 'left',

    },
    [theme.breakpoints.up("sm")]: {
      textAlign: 'left',

    },
    [theme.breakpoints.up("md")]: {
      textAlign: 'center',
    },
  },
  projectLink: {
    textDecoration: 'none',
    position: 'absolute',
    right: '2rem',
    color: '#1C1C1C'
  },
  brandingHeader: {
    color: '#FFF'
  },
  brandingText: {
    color: '#FFF',
    fontSize: '1rem'
  }

}));

export default useStyles;
