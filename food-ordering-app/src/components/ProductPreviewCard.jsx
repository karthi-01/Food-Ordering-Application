import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {
  const addProduct = () => {
    onAddProduct(product);
  };

  return (
    <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
    {/* <div style="display: flex; justify-content: center;">
      <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover"
         alt={product.name} />
     </div> */}
     <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src={product.imageUrl}
        className="w-40 h-40 object-cover"
        alt={product.name}
        style={{marginBottom:"1rem"}}
      />
    </div>
      <h1 className="pb-2 text-lg">{product.name}</h1>
      <p className="mb-2 h-20 line-clamp-4">{product.desciption}</p>
      <AddProduct onAddProduct={addProduct} />
    </div>
  );
};
