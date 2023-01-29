import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import classNames from 'classnames/bind';
import styles from './TabUI.module.scss';

const cx = classNames.bind(styles);

function TabUI({ header, listTitle }) {
    const [value, setValue] = React.useState('1');
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    console.log(listTitle);

    return (
        <div className={cx('tabUI')}>
            <Box>
                <TabContext value={value}>
                    <Box className={cx('tabUI__wrap')}>
                        <div className={cx('tabUI__header')}>{header}</div>

                        <TabList
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            aria-label="lab API tabs example"
                        >
                            {listTitle.map((item) => (
                                <Tab
                                    key={item.id}
                                    label={item.label}
                                    value={item.valueTab}
                                    className={cx('tabUI__tab')}
                                />
                            ))}
                        </TabList>
                    </Box>
                    {listTitle.map((item) => (
                        <div key={item.id}>
                            <TabPanel className={cx('tabUI__tabPanel')} value={item.valueTab}>
                                {item.content}
                            </TabPanel>
                        </div>
                    ))}
                </TabContext>
            </Box>
        </div>
    );
}

export default TabUI;
