// const Home=()=>{
//   var data={name:"React"};
//   return (
//     <div>
//       <p>Welcome To My Home - {data.name}</p>
//     </div>
//   )
// };


// const Home=()=>{
//   var data=[{name:"react"},{name:"JS"}];

//   return (
//     <div>
//       <p>Welcome to</p>
//       {data.map((value,index)=>{
//         return <p>{value.name}</p>
//       })} 
//     </div>
//   )

// }


// const Home=()=>{
//   var data=[{name:"react",age:24},
//             {name:"JS",age:32}];

//   return (
//     <div>
//       <p>Welcome to</p>
//       {data.map((x)=>{
//         return x.age>30 ? <li>{x.name}</li> : null;
//       })} 
//     </div>
//   )
// }

//map inside map
// const Home=()=>{
//   var data=[{name:"react",age:24,details:[42,34,56]},
//             {name:"node",age:32,details:[56,47,89]}];

//   return (
//     <div>
//       <p>Welcome to</p>
//       {data.map((x)=>{
//        return <p style={{backgroundColor:"blue"}}>{x.name}
//         {x.details.map((val)=>{
//           return <li style={{margin:"20px", backgroundColor:"red"}}>{val}
//           { x.details.map((val)=>
//           {
//             return <li style={{margin:"40px", backgroundColor:"yellow"}}>{val}</li>
//           })}
          
//           </li>
//         })}
//         </p>
//       })} 
//     </div>
//   )
// }


// import Count from "./Components/Count";
//import Greet from "./Components/Greet"
import Count from "./Components/CountClass"
const Home=()=>
{
  return (
  <div>
    <h1>Hello login Your account</h1> 
    <h1><Count /></h1>
    </div>
  )
}
export default Home
