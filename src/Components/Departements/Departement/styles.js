import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    tableCenter: {
        // padding: theme.spacing(3, 2),
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center"
    }
}));

export default useStyles;