import React from 'react';
import { classPre } from "../../util/index";
import './index.less'
interface TBodyData {
    name: string,
    dsc: string,
    type: Array<string>,
    value: string
}
export interface ExampleApiProps {
    data: Array<TBodyData>
}
const c = classPre('exampleApi')
const ExampleApi: React.SFC<ExampleApiProps> = (props) => {
    const createTBody = () => {
        return props.data.map(el => {
            const { name, dsc, type, value } = el
            const handleType = type.join(" | ")
            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{dsc}</td>
                    <td style={{width:'22%',color: '#c41d7f'}}>{handleType}</td>
                    <td>{value}</td>
                </tr>
            )
        })
    }
    return (
        <div className={c()}>
            <section>
                <h2>API</h2>
            </section>
            <table className={c('table')}>
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody className={c('table-body')}>
                    {createTBody()}
                </tbody>
            </table>
        </div>
    );
}

export default ExampleApi;