import React from "react";

// const Card = (props) => {
//     return (
//         //tachyion stylings- for example 'grow' is an animation
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
//             {/* src has a template string so we wrap in braces 
//             and we do ${} with dynamic name inside to get random
//             robots*/}
//             <div>
//                 {/* dynamic names and emails we added */}
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//          </div>   
//         </div>
//     );
// }


// we can do the above or we can do it this way:
// const Card = (props) => {
//     const { name, email, id } = props;
//     return (
//         //tachyion stylings- for example 'grow' is an animation
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
//             {/* src has a template string so we wrap in braces 
//             and we do ${} with dynamic name inside to get random
//             robots*/}
//             <div>
//                 {/* dynamic names and emails we added */}
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//          </div>   
//         </div>
//     );
// }


//we can simplify it further and do this:
const Card = ({name, email, id }) => {
    return (
        //tachyion stylings- for example 'grow' is an animation
        <div className='tc bg-animate hover-bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3 '>
            <img className='dib ba  bg-black' alt='robots' src={`https://robohash.org/${id}?200x200`} />
            {/* src has a template string so we wrap in braces 
            and we do ${} with dynamic name inside to get random
            robots*/}
            <div>
                {/* dynamic names and emails we added */}
                <h2>{name}</h2>
                <p>{email}</p>
         </div>   
        </div>
    );
}



export default Card;