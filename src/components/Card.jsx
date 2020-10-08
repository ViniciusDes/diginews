/* eslint-disable no-useless-computed-key */
/* eslint-disable no-dupe-keys */
import React from "react";
import {
  makeStyles,
  Card as MUICard,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 350,
    height: 280,
    margin: 15,
  },
  media: {
    height: 140,
  },
  content: {
    padding: 0,
  },
  title: {
    color: "#3C8DBC",
    padding: 8,
    display: "block",
    display: "-webkit-box",
    maxWidth: 330,
    height: 73, // $font-size*$line-height*$lines-to-show
    margin: "0 auto",
    fontSize: 16,
    lineHeight: 1.6,
    ["-webkit-line-clamp"]: 3,
    ["-webkit-box-orient"]: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  readMoreButton: {
    margin: 1,
  },
});

const ColorButton = withStyles({
  root: {
    color: "#FFF",
    backgroundColor: "#F59D3A",
    "&:hover": {
      backgroundColor: "#F59D3A",
    },
  },
})(Button);

export default function Card({ link, content, img }) {
  const classes = useStyles();

  return (
    <>
      <MUICard className={classes.root}>
        <CardActionArea onClick={() => window.open(link, "_blank")}>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography variant="body1" gutterBottom className={classes.title}>
              {content}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ColorButton
            size="small"
            color="primary"
            className={classes.readMoreButton}
            onClick={() => window.open(link, "_blank")}
          >
            Leia mais...
          </ColorButton>
        </CardActions>
      </MUICard>
    </>
  );
}
