import React from 'react';
import {useTranslation} from "react-i18next";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

export default function MasonryData(props) {
    const {t} = useTranslation();
    var items = [
        {id: 1, name: 'My First Item'},
        {id: 2, name: 'Another item'},
        {id: 3, name: 'Third Item'},
        {id: 4, name: 'Here is the Fourth'},
        {id: 5, name: 'High Five'}
    ];

    items = items.map(function(item) {
        return <div key={item.id}>{item.name}</div>
    });
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {items}

        </Masonry>
    );
};


