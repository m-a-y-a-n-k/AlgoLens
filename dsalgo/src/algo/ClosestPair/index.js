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
            <canvas id={this.props.id} width={this.props.width} height={this.props.height} style={{ margin: "20px", border: '1px solid lightgray', background: 'rgba(123,178,91,0.3)' }} onClick={(event) => {
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
                <header className="text-center">
                    <h3 className="p-2">Click in the canvas below to draw points</h3>
                </header>
                <Canvas id="pointsCanvas" width="800" height="800" />
            </React.Fragment>
        );
    }
}