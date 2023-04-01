import folderImage from '../../../images/folderImage.png';
import React, { useState } from 'react';
import './AddProducts.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    const onSubmit = data => {
        const product = {
            title: data.title,
            catagory: data.catagories,
            price: Number(data.price),
            rating: Number(data.rating),
            description: data.description,
            photoUrl: imageUrl
        }

        const url = `backend `;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("successfully added product")
                navigate('/');
            })
    }

    const handleImage = (event) => {
        const image = event.target.files[0];
        const imageData = new FormData();
        imageData.set("key", "3076d9416252823c2788e18914d271ae");
        imageData.append("image", image);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };



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