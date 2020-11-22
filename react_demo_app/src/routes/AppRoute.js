
import React from 'react';
import HomePage from '../component/routerexmple/HomePage';
import CreatePage from '../component/routerexmple/CreatePage';
import EditPage from '../component/routerexmple/EditPage';
import HelpPage from '../component/routerexmple/HelpPage';
import NotFound from '../component/routerexmple/NotFoundPage';

import {BrowserRouter, Route , Switch, Link} from 'react-router-dom';



const AppRouter = () =>{
return(
<BrowserRouter>
<Switch>
  <Route path="/" component={HomePage} exact ={true}/>
  <Route path="/create" component={CreatePage} />
  <Route path="/edit" component={EditPage} />
  <Route path="/help" component={HelpPage} />
  <Route component={NotFound} />
</Switch>
</BrowserRouter>
)
}

export default AppRouter