import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import TabContent, { HistoryTabContent } from '../TabContent/TabContent';
import './Tabs.css';

export default function Tabs() {
    const elRef = useRef(null);
    const contentRef = useRef(null);
    const [historyJson, setHistoryJson] = useState(window.localStorage.getItem('urlList') ? JSON.parse(window.localStorage.getItem('urlList')) : {});
    const [cartJson, setCartJson] = useState([]);

    useEffect(() => {
        const pathname = window.location.pathname; 
        let newJson = historyJson;
        if(!newJson[pathname] && pathname.includes('/products/')) {
            newJson[pathname] = {
                image: document.getElementsByTagName('img')[1].src,
                title: document.getElementsByClassName('product-single__title')[0].textContent
            };
            setHistoryJson(newJson);
            window.localStorage.setItem('urlList',JSON.stringify(newJson));
        }

        axios.get('https://jubin-server.herokuapp.com/getcart', {
            params: {
                cart: Cookies.get('cart')
            }
        }).then((response) => {
            setCartJson(response.data);
        });
    }, []);

    const openTab = (event) => {
        let list = elRef.current.childNodes;
        Array.from(list).map(child => {
            if(event.target != child) {
                child.classList.remove("active");
            } else {
                child.classList.add("active");
            }
        });

        list = contentRef.current.childNodes;
        Array.from(list).map(child => {
            if(event.target.innerText != child.id) {
                child.style.display = 'none';
            } else {
                child.style.display = 'flex';
            }
        });

    };

    return (
        <div>
            <div ref={elRef} className="tab">                
                <button className="tablinks active" onClick={openTab}>History</button>
                <button className="tablinks" onClick={openTab}>Cart</button>
                <button className="tablinks" onClick={openTab}>Wishlist</button>
            </div>
            <div className="tabcontent-wrapper" ref={contentRef}>
                <div id="History" className="tabcontent" style={{display:'flex'}}>
                    <HistoryTabContent data={historyJson} />
                </div>

                <div id="Cart" className="tabcontent">
                    <TabContent data={cartJson} />
                </div>
                
                <div id="Wishlist" className="tabcontent">
                    <HistoryTabContent data={historyJson} />
                </div>
            </div>
        </div>
    );
}