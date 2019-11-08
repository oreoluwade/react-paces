import React, { useRef } from 'react';

const AddInfo = () => {
    const titleRef = useRef(null);
    const commentRef = useRef(null);
    const authorRef = useRef(null);
    const categoryRef = useRef('place');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('first name:', titleRef, categoryRef);
    };

    return (
        <div>
            <form className="add-info" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    className="add-info__title"
                    ref={titleRef}
                />
                <textarea
                    name="content"
                    placeholder="Enter content here..."
                    className="add-info__comment"
                    ref={commentRef}
                />
                <input
                    type="text"
                    name="author"
                    className="add-info__author"
                    placeholder="Your Fullname"
                    ref={authorRef}
                />
                <select
                    className="add-info__category"
                    name="category"
                    ref={categoryRef}
                >
                    <option value="food">Food</option>
                    <option value="recreation">Recreational place</option>
                    <option value="place">Place</option>
                    <option value="clothing">Clothing</option>
                    <option value="household">Household items</option>
                    <option value="games">Games</option>
                </select>
                <button type="submit" className="add-info__button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddInfo;
