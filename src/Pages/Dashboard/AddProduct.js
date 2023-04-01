import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgSec = process.env.REACT_APP_ImgKey;

    const submitHandler = data => {
        // Posting Product image to image bb 
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgSec}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(ImageData => {
                console.log(ImageData);
                if (ImageData.status === 200) {
                    const productData = {
                        category_name: data.category,
                        img: ImageData.data.url,
                        name: data.name,
                        price: data.price,
                        detail: data.details
                    }
                    console.log(productData);
                    fetch("https://repli-q-task-server.vercel.app/addProduct", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success('Product Added Successfully!!');
                            navigate('/shop');
                        })
                        .catch(err => toast.error(err.message));
                }
            })
    }
    return (
        <div className='pb-10'>
            <h1 className='text-gray-700 text-4xl font-bold text-center py-6'>Add your Products</h1>
            <form onSubmit={handleSubmit(submitHandler)} className="bg-sky-500 flex flex-col w-full mx-auto max-w-lg p-12 shadow-lg shadow-error text-gray-800 ng-untouched ng-pristine ng-valid rounded-lg">
                <label className="self-start text-xs font-semibold">Select Category</label>
                <select {...register("category", { required: 'Category is required' })} className="select select-bordered w-full my-2" required>
                    <option value="phones">phones</option>
                    <option value="tablets">tablets</option>
                    <option value="laptops">laptops</option>
                    <option value="watches">watches</option>
                </select>
                <label className="self-start text-xs font-semibold">Product Name</label>
                <input
                    {...register("name", { required: "Product Name is required." })}
                    type="text" placeholder='Apple iPhone 14 pro' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-error focus:ring-error" required />
                {errors.name && <p className='text-error'>{errors.name.message}</p>}
                {/* profile input  */}
                <label className="self-start text-xs font-semibold pt-3">Product Image</label>
                <input
                    {...register("img", { required: "Photo is required." })}
                    type="file" className="flex bg-gray-200 items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-error focus:ring-error
                            file:mr-4 file:py-[14px] file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-gray-100 file:text-gray-700
                            hover:file:bg-violet-100" required />
                {errors.img && <p className='text-error'>{errors.img.message}</p>}
                <label className="self-start text-xs mt-2 font-semibold">Product Price</label>
                <input
                    {...register("price", { required: "price is required." })}
                    type="number" placeholder='139000' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-error focus:ring-error" required />
                {errors.price && <p className='text-error'>{errors.price.message}</p>}
                <label className="self-start text-xs mt-2 font-semibold">Product Details</label>
                <input
                    {...register("details", { required: "Product Details Number is required." })}
                    type="text" placeholder="Pros and Cons" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-error focus:ring-error" required />
                {errors.details && <p className='text-error'>{errors.details.message}</p>}
                <div className='mt-6'>
                    <button type="submit" className="flex w-full items-center justify-center h-12 px-6 text-sm font-semibold rounded bg-pink-500 text-gray-800 uppercase hover:scale-y-110 duration-500">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;