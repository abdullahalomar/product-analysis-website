import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const NotFound = () => {
   
    return (
        <div>
            <div className='notfound-text'>
            <h2>404 not found</h2>
            <h3>This page is outside of the Universe</h3>
            </div>
            <Link to='/home'><Home></Home>Back to home page</Link>
        </div>
    );
};

export default NotFound;