import React from 'react';
import { FaChessQueen } from 'react-icons/fa';

class Cell extends React.Component {
    render() {
        return (
            <div style={{ width: '30px', height: '30px', ...this.props.styles, float: 'left' }}>
                {this.props.children}
            </div>
        );
    }
}

export default class Board extends React.Component {

    state = {
        cells: []
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps != this.props) {
            let totalPieces = this.props.size * this.props.size,
                boards = document.querySelectorAll(".ch-board"), cells = [...this.state.cells], color = '#D3D3D3';
            for (const board of boards) {
                cells = [];
                board.style.width = `${this.props.size * 30 + 0.01}px`;
                board.style.height = `${this.props.size * 30}px`;
                board.style.position = 'relative';
                board.style.top = '20px';
                board.style.left = '20px';
                for (var i = 0; i < totalPieces; i++) {
                    // i = 0,color = white,size = 6,totalPieces = 36
                    color = (color == '#D3D3D3') ? '#606060' : '#D3D3D3';
                    if (i % this.props.size === 0 && i % 2 === 0 && totalPieces % 2 === 0) {
                        color = (color == '#D3D3D3') ? '#606060' : '#D3D3D3';
                    }
                    if (this.props.queens.includes(i)) {
                        cells.push(<Cell key={i} styles={{ backgroundColor: color }}><FaChessQueen style={{ margin: 'auto 5px', color: 'rgba(30,190,170,0.8)' }} /></Cell>);
                    } else {
                        cells.push(<Cell key={i} styles={{ backgroundColor: color }} />);
                    }
                }
                this.setState({ cells });
            }
        }
    }

    render() {
        return (
            <div className="ch-board">
                {this.state.cells}
            </div>
        )
    }
}