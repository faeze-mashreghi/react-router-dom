import { Routes, Route, Link ,Outlet,useNavigate} from 'react-router-dom';
import UserIndex from './Userindex'
import OwnUserProfile from './OwnUserP'
import UserProfile from './UserProfile'
function Users() {
  const navigate=useNavigate()

    return (
      // <div>
      //   <nav>
      //     <Link to="me">My Profile</Link>
      //   </nav>
  
      //   <Routes>
      //     <Route path="/" element={<UserIndex />} />
      //     <Route path=":id" element={<UserProfile />} />
      //     <Route path="me" element={<OwnUserProfile />} />
      //   </Routes>
      // </div>
/////////////////////////////////////////////////////
    <div>
      <nav>
      <Link to="me">My Profile</Link>
    </nav>
    <Outlet />
    <button className='but_style' onClick={()=>navigate('/')}>go to home Page</button>
    <button className='but_style' onClick={()=>navigate(-1)}>pre page</button>
    <button className='but_style' onClick={()=>navigate(-2)}>two pre page</button>
    <button className='but_style' onClick={()=>navigate(1)}>forward</button>

    </div>
    );
  }
  export default Users