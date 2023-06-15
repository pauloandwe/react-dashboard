import DashBoard from "./components/DashBoard";
import styled from 'styled-components';
import SideBar from './components/SideBar/Sidebar';
import TopBar from './components/SideBar/TopBar';

const AppDiv = styled.div`
width: 100%;
display: grid;
grid-template-columns: 84.3px 1fr ;
grid-template-rows: 85px 1fr ;
`;

function App() {
  return (
    <AppDiv>
      <SideBar />
      <TopBar />  
      <DashBoard />
    </AppDiv>
  );
}

export default App;
