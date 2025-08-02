
import './App.css';
import {Route, Switch} from "react-router-dom"
import {Component} from "react"
import Home from "./components/Home"
import Doctors from "./components/Doctors"
import DoctorProfilePage from "./components/DoctorProfilePage"
import BookAppointmentPage from "./components/BookAppointmentPage"
import NotFound from "./components/NotFound"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doctors" component={Doctors}/>
        <Route exact path="/DoctorProfilePage/:id" component={DoctorProfilePage} />
        <Route exact path="/BookAppointmentPage/:id" component={BookAppointmentPage} />
        <Route component={NotFound}/>
      </Switch>
    )
  }
}

export default App;
