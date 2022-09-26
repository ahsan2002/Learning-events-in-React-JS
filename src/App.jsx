import React, { useState } from "react";
// const App = () => {
//     const purple="#8e44ad";
//     const mytext="Click Me";
//     const[bg,setbg]=useState(purple);
//     const[name,setName]=useState(mytext);
//     const bgChange1=()=>{
//         // console.log('color change');
//         let newbg='lightBlue';
//         let newname='Ouch 😣';
//         setbg(newbg);
//         setName(newname);
//     }

//     const bgChange2=()=>{
//         // console.log('color change');
//         let newbg='red';
//         let newname='Wow 😋';
//         setbg(newbg);
//         setName(newname);
//     }
//   return (
//     <>
//       <div style={{backgroundColor:bg}}>
//         <button onClick={bgChange1} onDoubleClick={bgChange2}>{name}</button>
//       </div>
//     </>
//   );
// };

// const App = () => {
//   const [name, setName] = useState("");
//   const [fullName, setFull] = useState("");

//   const [lastname, setlastName] = useState("");
//   const [lastnamenew, setlast] = useState("");

//   const inputevent = (event) => {
//     // console.log(event.target.value)
//     setName(event.target.value);
//   };

//   const inputevent2 = (event) => {
//     setlastName(event.target.value);
//   };

//   const submitData = (event) => {
//     // console.log(event.target.value)
//     event.preventDefault();
//     setFull(name);
//     setlast(lastname);
//   };
//   return (
//     <>
//       <form onSubmit={submitData}>
//         <div>
//           <h1>
//             Hello {fullName} {lastnamenew}
//           </h1>
//           <input
//             type="text"
//             placeholder="Enter Your First Name"
//             onChange={inputevent}
//           />
//           <br />
//           <input
//             type="text"
//             placeholder="Enter Your Last Name"
//             onChange={inputevent2}
//           />
//           <br />
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </>
//   );
// };

const App = () => {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

    const inputevent = (event) => {
    // console.log(event.target.value)

    const value=event.target.value;
    const name=event.target.name;
    setfullName((preValue)=>{
        // console.log(preValue);
        if(name === 'fName'){
            return{
            fName: value,
            lName: preValue.lName,
            email:preValue.email,
            phone:preValue.phone,
            }
        }
        else if(name === 'lName'){
            return{
            fName: preValue.fName,
            lName:value ,
            email:preValue.email,
            phone:preValue.phone,
            }
        }
        else if(name === 'myemail'){
            return{
            fName: preValue.fName,
            lName:preValue.lName ,
            email:value,
            phone:preValue.phone,
            }
        }
        else if(name === 'mynum'){
            return{
            fName: preValue.fName,
            lName:preValue.lName ,
            email:preValue.email,
            phone:value,
            }
        }
    })

  };

  const submitData = (event) => {
    event.preventDefault();
    alert('form submitted');
  };
  return (
    <>
      <form onSubmit={submitData}>
        <div>
          <h1>
            Hello {fullName.fName} {fullName.lName} 
          </h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <input
            type="text"
            placeholder="Enter Your First Name"
            name="fName"
            onChange={inputevent}
            // value={fullName.fName}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lName"
            onChange={inputevent}
            // value={fullName.lName}
          />
          <br />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="myemail"
            onChange={inputevent}
            // value={fullName.lName}
          />
          <br />
          <input
            type="number"
            placeholder="Enter Your Mobile Number"
            name="mynum"
            onChange={inputevent}
            // value={fullName.lName}
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default App;