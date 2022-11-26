import Sidebar from '../components/Profile/Sidebar';
import Grid from '@mui/material/Grid';
import Ranking from '../components/Ranking';
import Nav from '../components/Navbar';
import FormUser from '../components/FormUser';

const SetAccount = () => {
    return (
        <>
        <Nav/>
        <Grid
            container
            justifyContent='center'
        >
            <Grid item xs={2}>
                <Sidebar/>
            </Grid>
            <Grid item xs={7}>
                <FormUser/>
            </Grid>
            <Grid item xs={2}>
                <Ranking/>
            </Grid>
        </Grid>
        </>
    );
};

export default SetAccount;
