import * as React from 'react';

interface IProps {
    name: string;
}

export class Welcome extends React.Component<IProps> {
    render() {
        return <h1>GoodAfternoon {this.props.name} !</h1>
    }
}