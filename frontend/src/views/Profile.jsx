import Feed from '../components/Profile/Feed';
import Sidebar from '../components/Profile/Sidebar';
import Grid from '@mui/material/Grid';
import Ranking from '../components/Ranking';
import Nav from '../components/Navbar'

const Profile = () => {
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
                <Feed />
            </Grid>
            <Grid item xs={2}>
                <Ranking/>
            </Grid>
        </Grid>
        </>
    );
};

export default Profile;
