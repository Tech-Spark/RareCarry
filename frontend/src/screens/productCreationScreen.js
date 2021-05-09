// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteProduct, listProducts, saveProduct } from '../actions/productAction';
// import LoadingBox from '../components/loadingBox';
// import MessageBox from '../components/messageBox';


// function ProductCreationScreen (props) {
//     const productList = useSelector((state) => state.productList);
//     const {loading, products, error} = productList;
//     const productSave = useSelector((state) => state.productSave);
//     const {success: successSave, loading: loadingSave, error: errorSave} = productSave;
//     const productDelete = useSelector((state) => state.productSave);
//     const {success: successDelete, loading: loadingDelete, error: errorDetete} = productDelete;
//     const dispatch = useDispatch();

//     const [modalVisible, setModalVisible] = useState(false);
//     const [id , setId] = useState('');
//     const [name, setName] = useState('');
//     const [title, setTitle] = useState('');
//     const [image, setImage] = useState('');
//     const [brand, setBrand] = useState('');
//     const [category, setCategory] = useState('');
//     const [price, setPrice] = useState('');
//     const [description, setDescription] = useState('');
//     const [countInStock, setCountInStock] = useState('');

//     // const handleChange = (e) => {
//     //     const name = e.target.name;
//     //     const value = e.target.value;
//     //     setImage({...image, [name]: value});
//     // }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//             dispatch(
//                 saveProduct({
//                     _id: id, title, name, image, brand, 
//                     category, description, price, countInStock,
//                 }));
//     }

//     const deleteHandler = (product) => {
//         dispatch(deleteProduct(product._id));
//     }

//     useEffect(() => {
//        if(successSave){
//          setModalVisible(false);
//        }
//        dispatch(listProducts());
//     }, [successSave, successDelete]);

//     const openModal = (product) => {
//         setModalVisible(true);
//         setId(product._id);
//         setTitle(product.title);
//         setName(product.name);
//         setImage(product.image);
//         setBrand(product.brand);
//         setPrice(product.price);
//         setCategory(product.category);
//         setDescription(product.description);
//         setCountInStock(product.countInStock);
//     }
    
//     return (
//         <>
//             <div className="container">
//                 <div className='login-direct'>
//                             <h3> Create Product:</h3>
//                             <button onClick={() => openModal({})}>Create Product</button>
//                     {loadingSave && <LoadingBox></LoadingBox> }
//                 </div>
//                 { modalVisible && 
//                     <div className="formBody">
//                     <form action="" id="form" onSubmit={handleSubmit}>
//                         <div className="formControl0">
//                             {errorSave && <MessageBox>{errorSave} </MessageBox>}
//                             <div className="formControl">
//                                 <label htmlFor="name"> Name: *</label>
//                                 <input 
//                                     type="text" 
//                                     id="name" 
//                                     name='name' 
//                                     className="styleipt" 
//                                     placeholder="Name"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required/>
//                             </div>
//                             <div className="formControl">
//                                 <label htmlFor="title"> Title: *</label>
//                                 <input 
//                                     type="text" 
//                                     id="title" 
//                                     name='tilte' 
//                                     className="styleipt" 
//                                     placeholder="title"
//                                     value={title}
//                                     onChange={(e) => setTitle(e.target.value)}
//                                     required/>
//                             </div>
//                             <div className="formControl">
//                                 <label htmlFor="image">Image: *</label>
//                                 <input 
//                                     type="text" 
//                                     id="image" 
//                                     name='image' 
//                                     className="styleipt" 
//                                     placeholder="image"
//                                     value={image}
//                                     onChange={(e) => setImage(e.target.value)}
//                                     required/>
//                             </div>
//                             <div className="formControl">
//                                 <label htmlFor="brand">brand: *</label>
//                                 <input 
//                                     type="text" 
//                                     id="brand" 
//                                     name='brand' 
//                                     className="styleipt" 
//                                     placeholder="brand"
//                                     value={brand}
//                                     onChange={(e) => setBrand(e.target.value)}
//                                     required/>
//                             </div>
//                             <div className="formControl">
//                                 <label htmlFor="category">Category: *</label>
//                                 <input 
//                                     type="text" 
//                                     id="category" 
//                                     name='category' 
//                                     className="styleipt" 
//                                     placeholder="category"
//                                     value={category}
//                                     onChange={(e) => setCategory(e.target.value)}
//                                     required/>
//                             </div>
//                             <div className="formControl">
//                                 <label htmlFor="price"> Price: *</label>
//                                 <input 
//                                     type="text" 
//                                     id="price" 
//                                     name='price' 
//                                     className="styleipt" 
//                                     placeholder="price"
//                                     value={price}
//                                     onChange={(e) => setPrice(e.target.value)}
//                                     required/>
//                             </div>
//                             <div className="formControl">
//                                 <label htmlFor="countInStock">CountInStock: *</label>
//                                 <input 
//                                     type="text" 
//                                     id="countInStock" 
//                                     name='countInStock' 
//                                     className="styleipt" 
//                                     placeholder="countInStock"
//                                     value={countInStock}
//                                     onChange={(e) => setCountInStock(e.target.value)}
//                                     required/>
//                             </div>
//                             <div className="formControl">
//                                 <label htmlFor="description">Description: *</label>
//                                 <textarea 
//                                     id="description" 
//                                     name='description' 
//                                     className="styleipt"
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     required></textarea>
//                             </div>
//                             <button type="submit" id="btnRg">{id ? 'Update' :'Create'}</button>
//                             <button type="button" onClick={() => setModalVisible(false)}>Back</button>
//                         </div>
//                     </form>
//                 </div>
//                }
//               <div className='productCat-list'>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Price</th>
//                             <th>Brand</th>
//                             <th>Category</th>
//                             <th>In Stock</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {products.map(product => ( <tr key={product._id}>
//                             <td>{product._id}</td>
//                             <td>{product.name}</td>
//                             <td>{product.price}</td>
//                             <td>{product.brand}</td>
//                             <td>{product.category}</td>
//                             <td>{product.countInStock}</td>
//                             <td>
//                                 <button onClick={() => openModal(product)}>Edit</button>
//                                 <button onClick={() => deleteHandler(product)}>Delete</button>
//                             </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//               </div>
//             </div>
//     </>
//     )
// }


// export default ProductCreationScreen;
