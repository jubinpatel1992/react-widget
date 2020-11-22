import React from 'react';
import './TabContent.css';

export function HistoryTabContent(props) {
    const { data } = props;
    return (        
        <div className="productlistwrap">
            {Object.keys(data).map((list) => (
                <div className="productlist">
                    <div className="productimg-wrap">
                        <a href={list}>
                            <img src={data[list].image}/>
                            <img className="heartimg" src={process.env.REACT_APP_BASE_URL + "/like.svg"} />
                        </a>
                    </div>
                    <p className="productTitle">{data[list].title}</p>
                </div>
            ))}
        </div>    
    );
}

export default function TabContent(props) {
    const { data } = props;
    return (        
        <div className="productlistwrap">
            {data.map((list) => (
                <div className="productlist">
                    <div className="productimg-wrap">
                        <img src={list.image}/>
                        <img className="heartimg" src={process.env.REACT_APP_BASE_URL + "/like.svg"} />
                    </div>
                    <p className="productTitle">{list.title}</p>
                    {list.price ? <p className="productText">{list.price}</p> : ""}
                </div>
            ))}
        </div>    
    );
}