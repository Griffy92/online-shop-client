import React from 'react';
import { Link } from 'gatsby'
import DropdownCategory from './category-filter-options/dropdown-catergory';
import DropdownSubCategory from './category-filter-options/dropdown-subcatergory';
import BoxFilters from './category-filter-options/box-options';
import PriceRangeMaxFilter from './category-filter-options/price-range-max';
import PriceRangeMinFilter from './category-filter-options/price-range-min';

const Sidebar = () => {
    return (
        <aside id="default-sidebar" className="fixed px-5 py-4 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="menu bg-white w-56 space-y-4">
                <h2> Filters </h2>
                <DropdownCategory />
                <DropdownSubCategory />
                <BoxFilters />
                <PriceRangeMinFilter />
                <PriceRangeMaxFilter />
                <div className='flex justify-center'>
                    <button className="btn btn-primary btn-sm">Apply Filter</button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;