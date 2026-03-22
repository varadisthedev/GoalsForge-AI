import React from 'react';


export const List = () => {
    const array: String[] = ["varad", "rait", "abhas", "varunvi"];
    //                                  ^

    return (
        <div>
            {
                array.map((name, index) => (
                    <h1 key={index}>{name}</h1>
                )
                )
            }
        </div>
    )
}
