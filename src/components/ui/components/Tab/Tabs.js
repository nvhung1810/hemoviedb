/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Tabs = ({ active, onChange, children }) => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                }}
            >
                {children.map((c, index) => (
                    <div key={index} onClick={() => onChange(index)} className={active === index ? 'activeTab' : ''}>
                        {c.props.title}
                    </div>
                ))}
            </div>
            <div>{children[active]}</div>
        </>
    );
};

export default Tabs;
