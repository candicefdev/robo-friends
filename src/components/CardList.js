import React from "react";
import Card from "./Card";

// const CardList = ({robots}) => {
//     // use id instead of 'i'
//     const cardsArray= robots.map((user, id) => {
//         return ( 
//             <Card 
//                 key={id} 
//                 id={robots[id].id} 
//                 name={robots[id].name} 
//                 email={robots[id].email}
//             /> 
        
//         );
//     })
//         return (
//             <div>
//                {cardsArray}
//             </div>
//     );
// }



// another way to write the above since anything inside  {} is considered js
// we can just do this instead:
const CardList = ({robots}) => {
        return (
            <div>
                {
                    robots.map((user, id) => {
                        return (
                            <Card
                                key={id}
                                id={robots[id].id}
                                name={robots[id].name}
                                email={robots[id].email}
                            />
                        );
                    })
                }
         
            </div>
    );
}

export default CardList;