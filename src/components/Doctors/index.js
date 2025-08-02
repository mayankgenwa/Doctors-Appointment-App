
import "./index.css"
import Header from "../Header"
import {Component} from "react"
import {Link} from "react-router-dom"
import {data} from "../data"


class Doctors extends Component{

    state = {searchInput: ""}

    onChangeSearchInput = event => {
        this.setState({searchInput: event.target.value})
    }
    render() {
        const {searchInput} = this.state
        const filteredList = data.filter(eachItem => 
            eachItem.specialization.toLowerCase().includes(searchInput.toLowerCase())
        )
        return (
            <div>
                <Header/>
                <div className="doctors-page-container">
                    <input type="search" placeholder="Search" className="input-search" onChange={this.onChangeSearchInput}/>
                    <ul className="doctors-list-container">
                        {filteredList.map(eachItem => {
                            const availColor = eachItem.availability === "Available Today" ? "available" : null
                            return (
                                <li className="doctor-card" key={eachItem.id}>
                                    <Link to={`/DoctorProfilePage/${eachItem.id}`} className="card-link">
                                        <img src={eachItem.image} className="doctor-image" alt="doctor-image" />
                                        <h1 className="doctor-name">{eachItem.name}</h1>
                                        <div className="spec-avail-container">
                                            <p className="specialization">{eachItem.specialization}</p>
                                            <p className={`availability ${availColor}`}>{eachItem.availability}</p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Doctors