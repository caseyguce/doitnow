import { Link } from 'react-router-dom';
import '../../css/components/todo/Header.css';

function Header() {
    return(
        <div className='header'>
            <h1>do it now!</h1>
            <Link className='link' to='/'><span>To-Do</span></Link>
            <Link className='link' to='/about'><span>About</span></Link>
        </div>
    );
}

export default Header;