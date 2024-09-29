import React from 'react'
import FilterButton from '../common/FilterButton'
import Dropdrown from '../common/DropdownFilter'

const FilterSection = ({ heading }) => {
    return (
        <div className='flex flex-col mx-auto'>

            <h2 className='text-3xl mx-4 my-2 mt-2 font-semibold'>{heading}</h2>
            <div className='flex flex-wrap mx-2'>
                
                <Dropdrown text="Sort by Rating" />
                <FilterButton text="Top Rated" />
                <Dropdrown text="State" />
                <Dropdrown text="City" />
                <Dropdrown text="Pin code" />
                <FilterButton text="Quick Response" />

            </div>

        </div>
    )
}

export default FilterSection
