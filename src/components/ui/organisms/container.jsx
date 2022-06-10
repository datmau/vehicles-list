import React, { useReducer } from "react";

import clsx from 'clsx';
import { makeStyles, createStyles} from "@material-ui/core/styles";

// components
import Header from "../atoms/Header/Header";

// constants
import { APP_TITLE, DRAWER_WIDTH, FOOTER_HEIGHT, FOOTER_TEXT } from "../../../utils/constants";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: '#F1F1F1',

    },
    content: {
      flexGrow: 1,
      padding: 3,
      minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
      background: '#F1F1F1',
      marginLeft: 5,
      ["sm"]: {
        marginLeft:3 ,
      },
    },
  })
);

const LayoutContainer = ({ children }) => {
  const classes = useStyles();
  const [open, toggle] = useReducer((open) => !open, true);
  return (
    <div className={classes.root}>
      <Header title={APP_TITLE} open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
      <footer>{FOOTER_TEXT}</footer>
    </div>
  );
};
export default LayoutContainer;
