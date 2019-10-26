import React from 'react';
import Point from '../../ui/Point';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = null;
    }

    componentDidMount() {
        this.canvas = document.getElementById(this.props.id);
    }

    render() {
        return (
            <canvas id={this.props.id} width={this.props.width} height={this.props.height} style={{ border: '1px solid lightgray' }} onClick={(event) => {
                let p = new Point(this.canvas);
                p.draw(event);
            }}></canvas>
        );
    }
}

export default class ClosestPair extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Canvas id="pointsCanvas" width="800" height="800" />
            </React.Fragment>
        );
    }
}