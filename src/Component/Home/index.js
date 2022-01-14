import { Link } from 'react-router-dom';

function Home() {
   
    return (
      <div>
        <h1>Home</h1>
          <h1>  <Link to="users/">Users</Link></h1>
      </div>
    );
  }
  export default Home