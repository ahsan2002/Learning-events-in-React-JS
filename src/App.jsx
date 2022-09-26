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


const App=()=>{

    const [name,setName]=useState('');
    const[fullName,setFull]=useState('');
    
    const [lastname,setlastName]=useState('');
    const[lastnamenew,setlast]=useState('');

    const inputevent=(event)=>{
        // console.log(event.target.value)
        setName(event.target.value);
    }

    const inputevent2=(event)=>{
        setlastName(event.target.value);
    }

    const submitData=(event)=>{
        // console.log(event.target.value)
        event.preventDefault();
        setFull(name);
        setlast(lastname);
    }
    return(
        <>
        <form onSubmit={submitData}>
        <div>
            <h1>Hello {fullName} {lastnamenew}</h1>
            <input type='text' placeholder="Enter Your First Name" onChange={inputevent} />
            <br />
            <input type='text' placeholder="Enter Your Last Name" onChange={inputevent2} />
            <br />
            <button type="submit">Submit</button>
        </div>
        </form>
        </>
    )
}

export default App;


