import React, { useState } from "react";
import Data from "./Data.js";
import List from "./List.js";

// function App() {
//   const [people, setPeople] = useState(Data);
//   return (
//     <main>
//       <section className="container">
//         <h3>{people.length} Birthdays Today</h3>
//         <List people={people} />
//         <button
//           onClick={() => {
//             setPeople([]);
//           }}
//         >
//           Clear All
//         </button>
//       </section>
//     </main>
//   );
// }

// export default App;

function App() {
  const [people, setPeople] = useState(Data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
        <button
          onClick={() => {
            setPeople(Data);
          }}
        >
          Refresh
        </button>
      </section>
    </main>
  );
}
export default App;
