import Dietary from "../Dietary/Dietary";
import AllActivity from "../AllActivity/AllActivity";
import Piechart from "../Piechart/Piechart";
import SumCal from "../SumCal/SumCal";
import React , { useEffect } from "react";
//import axios from 'axios';

function Overview() {
  useEffect(()=>{
    const token = localStorage.getItem("token");
    fetch('https://pk-be-4p2l.vercel.app/authen', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
  }
})
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'ok'){
        //localStorage.setItem('token',data.token)
    } else {
        alert('authen failed')
        localStorage.removeItem('token')
        window.location = '/login'
    }
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  },[])

// useEffect(() => {
//   const token = localStorage.getItem("token");
//   async function getResOver () {
//   try {
//     const response = await axios.post('https://pk-be-4p2l.vercel.app/authen', null, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       }
//     });
//     if (response.data.status === 'ok') {
//       //localStorage.setItem('token', data.token)
//     } else {
//       alert('authen failed');
//       localStorage.removeItem('token');
//       window.location = '/login';
//     }
//     console.log('Success:', response.data);
//   } catch (error) {
//     console.error('Error:', error);
//   }} getResOver ()
// }, []);

  return (
    <div className="Overview">
      <Piechart />
      <AllActivity />
      <Dietary />
      <SumCal />
    </div>
  );
}

export default Overview;
