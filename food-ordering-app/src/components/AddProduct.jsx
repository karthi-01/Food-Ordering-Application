// export const AddProduct = ({ onAddProduct }) => {
//     return (
//         <div className="flex justify-end">
//             <button onClick={onAddProduct} className="bg-yellow-400 hover:bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-lg"><span>+</span></button>
//         </div>
//     )
// }
import { useState } from 'react';

export const AddProduct = ({ onAddProduct }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      onAddProduct();
      setClicked(true);
    }
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleClick}
        className={`bg-yellow-400 hover:bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-lg ${
          clicked ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={clicked}
      >
        <span>+</span>
      </button>
    </div>
  );
};
