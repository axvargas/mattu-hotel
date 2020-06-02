import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    indicator: {
        height: 4,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
    },
    indicatorNone: {
        height: 0,

    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    selected: {
        borderBottom: '3px solid #fff',
        textColor: '#fff',
        opacity: 1
    }

}));
export default useStyles;