import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const BookingModal = ({ goods, setModalCondition }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    console.log(user);
    const { img, name, price } = goods;
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const phone = form.phone.value;
        const msg = form.msg.value;
        const location = form.location.value;

        const bookingData = {
            img,
            email: user?.email,
            photoURL: user?.photoURL,
            location: location,
            name: user?.displayName,
            productName: name,
            price,
            phone,
            msg
        }
        console.log(bookingData);

        fetch('https://repli-q-task-server.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booked Successfully!');
                    navigate('/cart');
                }
            })

        setModalCondition(0);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box shadow-lg shadow-error-content">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        <div className="text-center">
                            <p className="text-xl font-semibold">{name}</p>
                            <img src={img} alt="" className="w-2/3 mx-auto my-2" />
                            <p className="text-pink-500">Total Price: {price}</p>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input type="tel" name='phone' placeholder="+880 1XXXXXXXXX" className="input input-bordered w-full rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Location</span>
                                </label>
                                <input type="text" name='location' placeholder="@ Satkania, Chattogram" className="input italic input-bordered w-full rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea type="text" name='msg' placeholder="Product Looks Good" className="input input-bordered w-full rounded-md" required />
                            </div>
                            <div className="modal-action mt-14">
                                {
                                    user ?
                                        <input htmlFor="booking-modal" type="submit" value='Add to Cart' className="uppercase rounded-md w-full bg-gradient-to-r from-info to-pink-500 py-3 font-semibold border border-gray-500 hover:scale-y-110 hover:text-gray-100 duration-500" />
                                        :
                                        <>
                                            <input htmlFor="booking-modal" type="submit" value='Login to Continue' className="uppercase btn btn-disabled w-full" />
                                        </>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;