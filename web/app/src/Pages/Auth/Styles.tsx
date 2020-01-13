import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const useLoginStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    }),
);
