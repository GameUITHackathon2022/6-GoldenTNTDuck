import Feed from '../components/Profile/Feed';
import Sidebar from '../components/Profile/Sidebar';
import Grid from '@mui/material/Grid';
import Ranking from '../components/Ranking';
import Nav from '../components/Navbar'
import useCurrentUser from '../hooks/useCurrentUser'

const Profile = () => {
    const {data} = useCurrentUser()
    console.log(data)
    return (
        <>
        <Nav user={data?.data}/>
        <Grid
            container
            justifyContent='center'
        >
            <Grid item xs={2}>
                <Sidebar user={data?.data}/>
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
