import './Navbar.css'
import { useState, useEffect } from 'react'
// import ProfliePopUp from '../ProfliePopUp/ProfliePopUp'
// import { Link } from 'react-router-dom'
//import UserContext from '../Context/UserContext'
import online from '../../img/online.png'
import offline from '../../img/offline.png'
//import axios from 'axios';

const Navbar = () => {

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        window.location = '/login'
    }

    //สลับปุ่ม Login กับ ProfilePic
    const [logIn, setLogIn] = useState(true)
    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch('https://pk-be-4p2l.vercel.app/authen', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'ok') {
                    setLogIn(true)
                } else {
                    setLogIn(false)
                }
            })
    }, [])

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     async function getResNav () {
    //     try {
    //       const response = await axios.post('https://pk-be-4p2l.vercel.app/authen', null, {
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': 'Bearer ' + token
    //         }
    //       });
    //       if (response.data.status === 'ok') {
    //         setLogIn(true);
    //       } else {
    //         setLogIn(false);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     } getResNav()
    //   }, []);

    const showLogIn = logIn ? "hidden" : "show"
    let switchBtn = !logIn
    const showProfilePic = switchBtn ? "hidden" : "show"

    // console.log("showLogIn", showLogIn)
    // console.log("showProfilePic", showProfilePic)
    //Popup Profile
    // const [profilePopUp, setProfilePopUp] = useState(false)
    // const duringProfilePopUp = profilePopUp ? "" : "hiddenPopUp"

    //Hamburger-list
    const [hamburgerList, setHamburgerList] = useState('hidden')


    return (
        <div className="Navbar">
            <div id='Hamburger'>
                {/*<img className={`${showProfilePic}`} onClick={() => { hamburgerList === 'hidden' ? setHamburgerList('show-flex') : setHamburgerList('hidden') }} alt='hamburger' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' />
                <ul className={`${showProfilePic} ham-list ${hamburgerList} `}>
                    <li className='Ham-pic-login'>
                    <a target="_blank" rel="noopener noreferrer" href='/profile'><img className={`Profile_Pic_Ham ${showProfilePic}`} alt="Profile" src="https://cdn.shopify.com/s/files/1/0210/2968/3222/files/image17.jpg?v=1646429188"/></a>
                    <Link className={`nav-Login_btn ${showLogIn}`} to="/login">Log In</Link>
                </li>
                    <li className={`${showProfilePic}`}><a className={`${showProfilePic}`} href="/overview">Overview</a></li>
                    <li className={`${showProfilePic}`}><a className={`${showProfilePic}`} href="/overview#Dashboard">Dashboard</a></li>
                    <li className={`${showProfilePic}`}><a className={`${showProfilePic}`} href="/overview#Dietary">Dietary</a></li>
                    <li className={`${showProfilePic}`}><a className={`${showProfilePic}`} href="/" onClick={handleLogout}>Log out</a></li>
                </ul>*/}
                <button className='online-status' onClick={() => { hamburgerList === 'hidden' ? setHamburgerList('show-flex') : setHamburgerList('hidden') }}>
                    <p>online status</p>
                    <img className={`online-light ${showProfilePic}`} alt="online" src={online}/>
                    <img className={`online-light ${showLogIn}`} alt="offline" src={offline} />
                </button>
                { logIn && <ul className={`ham-list ${hamburgerList} `}>
                    <li><a href="/overview">Overview</a></li>
                    <li><a href="/overview#Dashboard">Dashboard</a></li>
                    <li><a href="/overview#Dietary">Dietary</a></li>
                    <li><a href="/" onClick={handleLogout}>Log out</a></li>
                </ul>}
            </div>

            <div id='notHamburger'>
                <ul>
                    <li className='nav-FitClub'><a href="/overview">Fit Club</a></li>
                    <li><a href="/overview#Dashboard">Dashboard</a></li>
                    <li><a href="/overview#Dietary">Dietary</a></li>
                    <li><a className={`${showProfilePic}`} href="/" onClick={handleLogout}>Log out</a></li>
                </ul>
                <div className='online-status'>
                    <p>online status</p>
                    <img className={`online-light ${showProfilePic}`} alt="online" src={online} />
                    <img className={`online-light ${showLogIn}`} alt="offline" src={offline} />
                </div>

                {/*<img onClick={()=>setProfilePopUp(true)} className={`nav-Profile_Pic ${showProfilePic}`} alt="Profile" src="https://cdn.shopify.com/s/files/1/0210/2968/3222/files/image17.jpg?v=1646429188"/>*/}
                {/*<Link className={`nav-Login_btn ${showLogIn}`} to="/login">Log In</Link>*/}
                {/*profilePopUp && <ProfliePopUp duringProfilePopUp={duringProfilePopUp} setProfilePopUp={setProfilePopUp}/>*/}
            </div>
        </div>
    )
}

export default Navbar