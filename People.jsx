import React from 'react'
import { person } from '../data'

// function People() {
//   return (
//     person.map((element, index, arr) => <><div>
//         <p>id: {element.id}</p>
//         <p>name: {element.name}</p>
//         <p>age: {element.age}</p>
//         <p>email: {element.email}</p>
//         </div></>)
//   )
// }

//****************************************************************** */

function People() {
    return (
         person.map((element, index, arr) => {
            const { id, name, age, email } = { ...element }

            return (
                <>
                    <div>
                        <p>id: {id}</p>
                        <p>name: {name}</p>
                        <p>age: {age}</p>
                        <p>email: {email}</p>
                    </div>
                </>
            )
        })
    )
}


//************************************************************** */

// function People({id, name, age, email}) {
   
//             return (
//                 <>
//                     <div>
//                         <p>id: {id}</p>
//                         <p>name: {name}</p>
//                         <p>age: {age}</p>
//                         <p>email: {email}</p>
//                     </div>
//                 </>
//             )
// }

//************************************************************** */

// function People({id, name, age, email}) {
   
//             return (
//                 <>
//                     <div>
//                         <p>id: {id}</p>
//                         <p>name: {name}</p>
//                         <p>age: {age}</p>
//                         <p>email: {email}</p>
//                     </div>
//                 </>
//             )
// }


export default People