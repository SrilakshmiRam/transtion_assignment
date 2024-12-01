
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MessageBoxes  from "./components/MessageBoxes";
import CaseFavourite from "./components/CaseFavourite";
import ActionLauncher from "./components/ActionLauncher";
import GreetingTemplate from "./components/GreetingTemplate";
import ChatWindow from "./components/ChatWindow";
import AgentForm from "./components/AgentForm";

import'./App.css'

const App=()=>(
  <div className="main-container">
    <Sidebar/>
    <div className='section-container'>
       <Header/>
       <MessageBoxes/>
       <div className="componets">
           <AgentForm />
           <div className="middle">
            <ChatWindow/>
           </div>
           <div className="components-container">
               <GreetingTemplate/>
               <ActionLauncher />
               <CaseFavourite/>
           </div>
       </div>
    </div>
  </div>
)

export default App;
