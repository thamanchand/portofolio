import { makeStyles } from '@material-ui/core';
import colors from '../Constants/Colors';
const useStyles = makeStyles(theme => ({
  container: {
    padding: '3rem 7rem',
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
  experienceBlock: {
    paddingBottom: '2rem',
    position: 'relative',
    paddingLeft: '7rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '@media (max-width:1200px)': {
      flexDirection: 'column',
      alignItems: 'flex-end'
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
  yearsHeader: {
    padding: '2rem 0rem',
  },
  skillTags: {
    padding: '1rem 0rem',
  },
  tag: {
    margin: '3px',
    backgroundColor: '#666666',
    color: '#FFF'
  },
  companyInfo: {
    width: '20%',
    marginTop: '0rem',
    position: 'relative',
    '@media (max-width:1200px)': {
      width: '40%',
      marginBottom: '1rem'
    },
    '@media (max-width:600px)': {
      width: '60%',
      marginBottom: '0.5rem'
    }
  },
  year: {
    display: 'block',
    lineHeight: '3rem',
    textAlign: 'center',
    color: colors.snow,
    backgroundColor: colors.themeColor,
    fontWeight: 'bold'
  },
  company: {
    display: 'block',
    lineHeight: '3.5rem',
    textAlign: 'center',
    color: colors.black,
    backgroundColor: colors.snow,
    fontWeight: 'bold'
  },
  content: {
    marginTop: '0rem',
    boxShadow: '0 2px 4px rgba(0,0,0,.2)',
    padding: '2rem 2rem',
    backgroundColor: colors.snow,
    width: '100%',
    '@media (max-width:1200px)': {
      width: '96%'
    },
    '@media (max-width:600px)': {
      width: '96%'
    }
  },
  contentHeader: {
    color: colors.black,
    marginBottom: '1rem',
    fontWeight: 'bold'
  },
  contentBody: {
    color: colors.paragraph
  },
  line: {
    height: '100%',
    width: '2px',
    borderLeft: '2px dashed ' + colors.black,
    display: 'block',
    position: 'absolute',
    left: '3%',
    top: '2%',
    '@media (max-width:1200px)': {
      left: '0rem',
      top: '4%'
    }
  },
  iconContainer: {
    position: 'absolute',
    left: '0%',
    height: '4rem',
    width: '4rem',
    backgroundColor: colors.snow,
    textAlign: 'center',
    border: '5px solid ' + colors.borderColor,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '1%',
    '@media (max-width:1200px)': {
      left: '-2rem',
      top: '4%'
    }
  },
  icon: {
    fontSize: '2rem'
  }
}));

export default useStyles;
