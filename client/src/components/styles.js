import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  ul: {
    justifyContent: "space-around",
    // backgroundColor: "#FFC107",
    "& .MuiPaginationItem-root": {
      border: "none",
      backgroundColor: "#FFC107",
      color: "white",
      "&:hover": {
        backgroundColor: "#FFC107",
      },
      // color: "red",
    },
  },
}));
