
import React from "react";
import styles from "./index.less"


export class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }
    componentDidCatch(error: Error, info: any) {
        this.setState({ hasError: true });
        if (process.env.NODE_ENV === "production") {
            // 报错处理

        }

    }

    render() {
        if (this.state.hasError) {
            // 也可以在出错的component处展示出错信息
            // return (<h1>出错了!</h1>);
            return <div className={styles.errPage}>
                <h1>页面出错！</h1>
            </div>;
        }
        return this.props.children;
    }
}

