// import "./List.css";
// import React, { useState } from "react";

// const List = () => {
//   const [text, setText] = useState("");
//   const [items, setItems] = useState([]);

//   const addItem = () => {
//     if (text.trim() === "") return;
//     setItems([...items, text]);
//     setText("");
//   };

//   return (
//     <div>
//       <input
//         className="textInput"
//         type="text"
//         placeholder="Tapsiriq yaz..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button className="add-btn" onClick={addItem}>
//         Əlavə et
//       </button>

//       <div className="itemDiv">
//         {items.map((item, index) => (
//           <p className="textP" key={index}>
//             {item}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default List;
