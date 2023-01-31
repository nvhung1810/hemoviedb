import { useState } from 'react';
import Tab from './Tab';
import Tabs from './Tabs';

function TabUI({ header, border, themeTab, list }) {
    const [active, setActive] = useState(0);

    const handleChange = (newActive) => setActive(newActive);

    return (
        <div className="tabUI">
            <Tabs header={header} border={border} themeTab={themeTab} active={active} onChange={handleChange}>
                {list.map((item, index) => (
                    <Tab key={index} title={item.title}>
                        {item.content}
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
}

export default TabUI;
