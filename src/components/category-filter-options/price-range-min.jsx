import React from 'react';

const PriceRangeMinFilter = () => {
    return (
        <div>
            <label className="label">
                <span className="label-text">Min Price</span>
            </label>
            <input type="range" min={0} max="100" className="range range-xs" /> 
            <label className="label">
                <span className="label-text-alt">Not Lots</span>
                <span className="label-text-alt">Lots</span>
            </label>           
        </div>
    )
}

export default PriceRangeMinFilter;