/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './TabUI.scss';
const Tabs = ({ header, themeTab, border, active, onChange, children }) => {
    return (
        <>
            <div className="tabs">
                <div className="tabs__header">{header}</div>
                <div className={border}>
                    {children.map((c, index) => (
                        <div key={index} onClick={() => onChange(index)} className={active === index ? themeTab : ''}>
                            <div className="tabs__item">{c.props.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div>{children[active]}</div>
        </>
    );
};

export default Tabs;
