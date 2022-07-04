import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    // minHeight: "calc((100vh - 145px) - 331px + 24px)",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  searchButton: {
    backgroundColor: "#FFC107",
    "&:hover": {
      backgroundColor: "#FFC107",
    },
    color: "white",
  },
}));
