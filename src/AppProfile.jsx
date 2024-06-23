import logo from './logo.svg';
import './App.css';

function AppProfile() {
  const name  = '가영'
    const list = ['우유', '딸기', '바나나'];
  return (
      <>
    <div className="App">
      <div> Name  : {name}</div>
       <ul>

           {
               list.map((item) =>
                   <li>
                       {item}
                   </li>
                       )
           }

       </ul>
    </div>
      </>
  );
}

export default AppProfile;
