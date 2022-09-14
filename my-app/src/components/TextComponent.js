import React from 'react';
import '../App.css';

export default function TextComponent({
        name,
        repo,
        youtube,
        slides,
    }) 
    {
    return (
        <>
        <h3 className='header-text'>{name}</h3>
        <div>
        <a href={slides}>
            <button className="button-name" type='button'>
                slides
            </button>
        </a>
        <a href={youtube}>
            <button className="button-name" type='button'>
                the stream
            </button>
        </a>
        <a href={repo}>
            <button className="button-name" type='button'>
                {name} repo
            </button>
        </a>
        </div>
        
        </>
        
    );
}

