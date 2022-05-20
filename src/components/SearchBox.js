import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2 pb4  '>
            <input
                className='tc f3 lh-copy  w-30 br-pill pa3 ba b--green bg-lightest-blue' 
                type ='search'
                placeholder='&#x2315; search robots '
                onChange={searchChange}
            />
        </div>
    )
}



export default SearchBox;