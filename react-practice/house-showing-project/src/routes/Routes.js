import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import PropertyListings from "pages/PropertyListings";

const Routes = () => {
    return (  
      <Router>
        <Switch>
          <Redirect exact from='/' to='property-listings'/>
          <Route path='/property-listings' component={PropertyListings}/>
        </Switch>
      </Router>
    );
}
 
export default Routes;