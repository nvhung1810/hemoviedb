import { useState } from 'react';
import Tab from './Tab';
import Tabs from './Tabs';

function TabEdit({ title, content }) {
    const [active, setActive] = useState(0);

    const handleChange = (newActive) => setActive(newActive);

    return (
        <div className="App">
            <Tabs active={active} onChange={handleChange}>
                <Tab title={title}>{content}</Tab>
                <Tab title="Tab2">Paragraph yyyyyyy</Tab>
                <Tab title="Tab3">Paragraph zzzzzzz</Tab>
            </Tabs>
        </div>
    );
}

export default TabEdit;
