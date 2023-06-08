import * as React from 'react'
import Sidebar from '../components/sidebar';
import CategoryContent from '../components/category-page-content';

const CategoryPage = () => {

    return (
        <div>
            <Sidebar />
            <div className="ml-64 p-4">
                <CategoryContent />
            </div>
        </div>
    )
}

export default CategoryPage;