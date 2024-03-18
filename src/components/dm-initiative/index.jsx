import { useState } from "react";
import styles from "./styles.css";

const data = [
   {
      name: "",
      intiative: null
   },
   {
      name: "",
      intiative: null
   },
   {
      name: "",
      intiative: null
   }
]

export default function DmInitiative() {

   const [player, setPlayer] = useState(data);

   function handleNameChange() {

   }

   function handleInitiativeChange() {

   }


   return (
      <div className="tracker">
         <div className="tracker-row">
            <div className="tracker-th"></div>
            <div className="tracker-th">Initiative</div>
            <div className="tracker-th">Name</div>
            <div className="tracker-th">Remove</div>   
         </div>
            {
               player.map((child, index) => (
                  <div key={index} className="tracker-row">
                     <div className="tracker-td"></div>
                     <div className="tracker-td">
                        <input
                           name="initiative"
                           type="number"
                           value={child.intiative} />
                     </div>
                     <div className="tracker-td">
                        <input
                           name="name"
                           type="text"
                           value={child.name} />
                     </div>
                  </div>
               ))
            }
      </div>
   );
}