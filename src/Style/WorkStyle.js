import colors from "../Constants/Colors";
import { makeStyles } from "@material-ui/core";
const style = makeStyles((theme) => ({
  container: {
    backgroundColor: colors.backgroundLite,
    padding: "2rem 3rem",
    display: "flex",
    minHeight: "60vh",
    flexDirection: "column",
    "@media (max-width:770px)": {
      padding: "1rem 0.5rem",
      height: "100%",
    },
  },
  filterContainer: {
    flexDirection: "row",
    display: "flex",
  },
  selectedFilter: {
    marginRight: "0.3rem",
    backgroundColor: colors.themeColor,
    color: colors.snow,
    textAlign: "center",
    fontSize: "1rem",
    padding: "0.2rem 0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 200ms ease-out",
    "@media (max-width:600px)": {
      fontSize: "0.85rem",
    },
  },
  filter: {
    marginRight: "0.3rem",
    textAlign: "center",
    fontSize: "1rem",
    padding: "0.2rem 0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 200ms ease-out",
    "@media (max-width:600px)": {
      fontSize: "0.85rem",
    },
  },
  projectContainer: {
    padding: "1rem 1rem 1rem 0rem",
  },
  imageContainer: {
    textAlign: "center",
    width: "100%",
    height: "15rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "15rem",
    transition: "all 200ms ease-in",
    "&:hover": {
      height: "14.5rem",
      width: "97%",
    },
  },
  moreButton: {
    backgroundColor: colors.themeColor,
    padding: "0.5rem 1rem",
    color: colors.snow,
    "&:hover": {
      backgroundColor: colors.themeColor,
    },
  },
  buttonContainer: {
    textAlign: "end",
    marginTop: "1rem",
  },
  projectTitle: {
    "@media (max-width:1024px)": {
      fontSize: "1rem",
    },
  },
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.95)",
    zIndex: "10000",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  modal__content: {
    position: "relative",
    maxHeight: "90vh",
    margin: "0 2rem",
    boxShadow: "0 14px 32px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    zIndex: "1",
    overflowY: "auto",
  },
  modal__heading: {
    margin: "0",
    backgroundColor: "#84034c",
    padding: "0.5rem 1rem",
    color: "#fff",
  },
  modalText: {
    maxHeight: "70vh",
    overflowY: "auto",
    padding: "0 1rem",
  },
  modal__close: {
    position: "absolute",
    right: "0rem",
    top: "0rem",
    fontSize: "0",
    "&::before": {
      content: '"+"',
      position: "absolute",
      right: "1rem",
      transform: "rotate(45deg)",
      fontSize: "28px",
      color: "#fff",
      cursor: "pointer",
    },
  },
  modal__content_portfolio: {
    padding: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "#1C1C1C",
  },
  live: {
    position: "absolute",
  },
}));
export default style;
