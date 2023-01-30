import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import classNames from 'classnames/bind';
import styles from './TabUI.module.scss';

const cx = classNames.bind(styles);

function TabUI({ header, list }) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }} className={cx('tabUI')}>
            <TabContext value={value}>
                <Box>
                    <TabList
                        textColor="primary"
                        indicatorColor="primary"
                        onChange={handleChange}
                        className={cx('tabUI__wrap')}
                    >
                        <div className={cx('tabUI__header')}>{header}</div>
                        {list.map((item, index) => (
                            <Tab key={index} label={item.label} value={item.valueData} />
                        ))}
                    </TabList>
                </Box>
                {list.map((item, index) => (
                    <TabPanel className={cx('tabUI__tabPanel')} key={index} value={item.valueData}>
                        {item.content}
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    );
}

export default TabUI;
