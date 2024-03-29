import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '3rem'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    typo: {
        textAlign: 'center',
    },
    body: {
        lineHeight: 2
    },
    btn: {
        textDecoration: 'none',
        width: '100%',

    }

}));
export default useStyles;