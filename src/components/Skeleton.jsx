import React from "react";
import { makeStyles } from "@material-ui/core";

import { Skeleton } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  root: { display: "flex", flexWrap: "wrap" },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  containerSkeleter: {
    display: "flex",
    flexWrap: "wrap",
  },

  itemSkeleter: {
    padding: "15px",
  },
}));

export function Skeletons() {
  const classes = useStyles();
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className={classes.containerSkeleter}>
      {number.map((n, index) => (
        <div className={classes.itemSkeleter} key={index}>
          {/* <Skeleton variant="circle" width={40} height={40} /> */}
          <Skeleton variant="rect" width={350} height={170} />
          <Skeleton variant="text" width={350} height={15} />
          <Skeleton variant="text" width={350} height={15} />
          <Skeleton variant="text" width={350} height={15} />

          <Skeleton variant="text" width={100} height={45} />
        </div>
      ))}
    </div>
  );
}
