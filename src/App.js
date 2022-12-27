import logo from './logo.svg';
import ProgressBar from 'react-bootstrap/ProgressBar';
  import React,{useState} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";


function App() {
  let country="in"
  let category="general"
  let page=1
  let pageSize=9
  const [text, setText] = useState("")
  let apiKey="1d75bc84d90c4eebac3485010c1bee3f"
  let [searchBool,setSearchBool]= useState(false);
  let [progress,setProgress]=useState(0)
  let [showpro,setShowpro]=useState(true)
  let [query,setQuery]=useState("/")
  
  return (
    <>  
    <BrowserRouter>

    
    <NavBar setText={setText} setQuery={setQuery} setSearchBool={setSearchBool}/>
    {showpro&&<ProgressBar variant="danger" now={progress} style={{height:'3px'}}/>}
    <Routes>
    <Route exact path="/" element= <News country={country} category={category} page={page} pageSize={pageSize} text={text} apiKey={apiKey} searchBool={searchBool} setSearchBool={setSearchBool} setProgress={setProgress} setShowpro={setShowpro}/> />
    <Route exact path="/science" element= <News country={country} category={"science"} page={page} pageSize={pageSize} text={text} apiKey={apiKey} searchBool={searchBool} setSearchBool={setSearchBool} setProgress={setProgress} setShowpro={setShowpro}/> />
    <Route exact path="/health" element= <News country={country} category={"health"} page={page} pageSize={pageSize} text={text} apiKey={apiKey} searchBool={searchBool} setSearchBool={setSearchBool} setProgress={setProgress} setShowpro={setShowpro}/> />
    <Route exact path="/sports" element= <News country={country} category={"sports"} page={page} pageSize={pageSize} text={text} apiKey={apiKey} searchBool={searchBool} setSearchBool={setSearchBool} setProgress={setProgress} setShowpro={setShowpro}/> />
    <Route exact path="/entertainment" element= <News country={country} category={"entertainment"} page={page} pageSize={pageSize} text={text} apiKey={apiKey} searchBool={searchBool} setSearchBool={setSearchBool} setProgress={setProgress} setShowpro={setShowpro}/> />
    <Route exact path="/business" element= <News country={country} category={"business"} page={page} pageSize={pageSize} text={text} apiKey={apiKey} searchBool={searchBool} setSearchBool={setSearchBool} setProgress={setProgress} setShowpro={setShowpro}/> />
    <Route exact path="/technology" element= <News country={country} category={"technology"} page={page} pageSize={pageSize} text={text} apiKey={apiKey} searchBool={searchBool} setSearchBool={setSearchBool} setProgress={setProgress} setShowpro={setShowpro}/> />
    <Route exact path="/bitcoin" element= <News country={country} category={"bitcoin"} page={page} pageSize={pageSize} text={text} apiKey={apiKey} searchBool={searchBool} setSearchBool={setSearchBool} setProgress={setProgress} setShowpro={setShowpro}/> />
    {searchBool&&<Route exact path={query} element= <News country={country} category={text} page={page} pageSize={pageSize} text={text} apiKey={apiKey} searchBool={searchBool} setSearchBool={setSearchBool} setProgress={setProgress} setShowpro={setShowpro}/> />}
    </Routes>
    
   
    </BrowserRouter>
    </>

  );
}

export default App;
