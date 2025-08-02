import "./index.css"
import Header from "../Header"


const Home = props => {
    
    const onClickBookBtn = () => {
        const {history} = props
        history.push("/doctors")
    }
    return (
        <>
            <Header/>
            <div className="home-container">
                <div>
                    <h1 className="heading">Book An Appointment</h1>
                    <p className="description">Doctors are the lifeline between Hope and Healing</p>
                    <button type="button" className="book-btn" onClick={onClickBookBtn}>Book Appointment</button>
                </div>
                <img src="/image1.jpg" alt="" className="home-image" />
            </div>
            
        </>
    )
}

export default Home