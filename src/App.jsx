import React, { useEffect, useState } from "react";
import { makeStyles, Backdrop, CircularProgress } from "@material-ui/core";

import { getExeRss } from "./services/api";
import Card from "./components/Card";


import { Skeletons as Skeltonnn } from "./components/Skeleton";

 
const useStyles = makeStyles(theme => ({

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

function App() {
  const classes = useStyles();

  const [news, setNews] = useState([]);
  const [loadingNews, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getExeRss()

      .then(data => {
        const items = data.querySelectorAll("item");

        setNews(Array.prototype.slice.call(items));
      })
      .catch(() => {
        // TODO: Emitir erro de carregamento
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>

      {loadingNews && <Skeltonnn />}

 
      {/*TODO: Colocar erro quando carrega e Skeleto ao inves de Backdrop*/}

      <div className={classes.root}>
        {news.map((n, index) => {
          const img = n.getElementsByTagName(["media:content"])[0].attributes[1]
            .nodeValue;
          const link = n.getElementsByTagName(["guid"])[0].innerHTML;
          const content = n.getElementsByTagName(["title"])[0].innerHTML;

          return <Card key={index} link={link} img={img} content={content} />;
        })}
      </div>
    </>
  );
}

export default App;
