import folderImage from '../../../images/folderImage.png';
import React from 'react';
import './AddProducts.css';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const product = {
            title: data.title,
            catagory: data.catagories,
            price: Number(data.price),
            rating: Number(data.rating),
            description: data.description
        }
        console.log(product)
    }

    const handleImage = () => {
        console.log('upload image')
    }

    return (
        <div id='addProduct'>
            <div className="container">
                <h6>General Information</h6>
                <div className="product-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="Title">Title:</label>
                                <input {...register("title", { required: true })} type="text" placeholder="Title" />
                                {errors.title && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="Catagories">Catagories:</label>
                                <select {...register("catagories")}>
                                    <option value="fast_food">Fast food</option>
                                    <option value="burger">Burger</option>
                                    <option value="pizza">pizza</option>
                                    <option value="american">American</option>
                                </select>
                                {errors.catagories && <span>This field is required</span>}
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="Price">Price</label>
                                <input {...register("price", { required: true })} type="number" name="price" placeholder="Price" />
                                {errors.price && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="newPrice">Rating</label>
                                <input max="5" {...register("rating", { required: true })} type="number" name="rating" placeholder="Rating" />
                                {errors.rating && <span>This field is required</span>}
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="description">Description</label>
                                <textarea {...register("description", { required: true })} name="description" rows="8"></textarea>
                                {errors.description && <span>This field is required</span>}
                            </div>
                            <div className="col-sm-12 col-md-6">

                                <label htmlFor="UploadPhoto">Upload Photo</label>
                                <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <img src={folderImage} alt='image_1' />
                                        <h5>Upload photo</h5>
                                    </label>

                                    <input
                                        name='imageUrl'
                                        onChange={handleImage}
                                        id="file-input"
                                        type="file"
                                        required />
                                </div>
                            </div>
                        </div>
                        <input style={{ background: '#18052ba1', border: 'none' }} className='mt-2 text-white bg-darkgray' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;