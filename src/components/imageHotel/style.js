import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backgroundI: {
        // width: '100%',
        height: '700px',

    },
    container: {
        margin: '0px 0px 0px 0px',
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to top, rgb(34,49,63,.75), rgb(34,49,63,.75))',

    },
    typoP: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    typo: {
        textAlign: 'center',
    }


}));
export default useStyles;