import React from 'react';
import styles from './index.less'

export const NotFound: React.SFC = () => {
    return (
        <div className={styles.notFound}>
            <h1 >404</h1>
            <div >抱歉，你访问的页面不存在</div>
        </div>
    );
}
