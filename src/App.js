import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route ,useRoutes} from 'react-router-dom';
import Users from './Component/User'
import Home from './Component/Home'
import UsersIndex from './Component/User/Userindex'
import UserProfile from './Component/User/UserProfile'
import OwnUserProfile from './Component/User/OwnUserP'




// function App() {
  
//   return (<>
  
//    {/* <BrowserRouter>
//        <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="users/*" element={<Users />} />
//       </Routes> 
//        </BrowserRouter>
// ////////////////////////////////////////////////////
// in one place
//       <BrowserRouter>
//  <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="users" element={<Users />}>
//           <Route path=":id" element={<UserProfile />} />
//           <Route path="me" element={<OwnUserProfile />} /> 
//         </Route>
//       </Routes>
//     </BrowserRouter> */}
//       </>
//   );
// }
// export default App;




function App() {

  let element = useRoutes([

    { path: '/', element: <Home /> },
    {
      path: 'users',
      element: <Users />,
      children: [
        // { path: '/', element: <UsersIndex /> },
        { path: ':id', element: <UserProfile /> },
        { path: 'me', element: <OwnUserProfile /> },
      ]
    }
  ]);

  return element;
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
export default AppWrapper;



