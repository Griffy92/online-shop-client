import React from 'react';

const PriceRangeMaxFilter = () => {
    return (
        <div>
            <label className="label">
                <span className="label-text">Max Price</span>
            </label>
            <input type="range" min={0} max="100" className="range range-xs" /> 
            <label className="label">
                <span className="label-text-alt">Not Lots</span>
                <span className="label-text-alt">Lots</span>
            </label>           
        </div>
    )
}

export default PriceRangeMaxFilter;