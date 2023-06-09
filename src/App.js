import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import JSX from './Components/JSX';
import State from './Components/State'
import SetStateCounter from './Components/SetStateCounter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import ConditionalRendering from './Components/ConditionalRendering';
import StyleSheets from './Components/StyleSheets';
import Inline from './Components/Inline';
// import './Components/appStyles.css';
import style from './Components/appStyles.module.css'
import Form from './Components/Form';
import MountingLifecycleA from './Components/MountingLifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureComponent from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import ClickCounterHOC from './Components/ClickCounterHOC';
import HoverCounter from './Components/HoverCounter';
import ClickCounterRP from './Components/ClickCounterRP';
import HoverCounterRP from './Components/HoverCounterRP';
import User from './Components/User';
import { UserProvider } from './Components/userContext';
import UserRP from './Components/UserRP';
import CounterRP from './Components/CounterRP';


function App() {
  return (
    <div className="App">
      {/* <CounterRP render={ (count, countIncrement) => <ClickCounterRP count={count} countIncrement={countIncrement}/>}/>
      <CounterRP render={ (count, countIncrement) => <HoverCounterRP count={count} countIncrement={countIncrement}/>}/> */}
      {/* <UserRP render={ (isLoggedIn) => isLoggedIn ? 'Mukesh' : 'Guest'}/> */}
      {/* <UserProvider value="knoxartiste">

      </UserProvider> */}
      {/* <ClickCounterRP />
      <HoverCounterRP />
      <User /> */}
      {/* <ClickCounterHOC/>
      <HoverCounter/> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table />
      <FragmentDemo /> */}
      {/* <MountingLifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={style.sucess}>Sucess</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheets primary={false} /> */}
      {/* <ConditionalRendering /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick/> */}
      {/* <SetStateCounter /> */}
      {/* <State /> */}
      {/* <JSX/> */}
      {/* <FunctionalComponent name='Bruce'/>
     <ClassComponent name='Mr. Beast'/> */}
    </div>
  );
}

export default App;
