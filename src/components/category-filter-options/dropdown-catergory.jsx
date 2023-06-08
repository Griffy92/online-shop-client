import React from 'react';

const DropdownCategory = () => {
    return (
        <div>
            <label className="label">
                <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
                <option>Please Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
            </select>
        </div>
    )
};

export default DropdownCategory;