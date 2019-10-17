import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, InputGroup, Input, Alert } from 'reactstrap';
import SketchPicker from 'react-color';

class CanvasImage extends React.Component {

    captureMousePixel(event) {
        let image = document.getElementById('cusImage'), details = document.getElementById('detailsPane');
        let imageData = image.getContext('2d').getImageData(event.nativeEvent.offsetX, event.nativeEvent.offsetY, image.width, image.height);
        let pixelData = imageData.data;
        details.innerHTML = 'R: ' + pixelData[0] + '<br>G: ' + pixelData[1] + '<br>B: ' + pixelData[2] + '<br>A: ' + pixelData[3];
    }
    render() {
        return (
            <canvas id="cusImage"
                width="250"
                height="250"
                style={{
                    cursor: 'crosshair',
                    margin: '5% auto',
                    border: '1px solid #bbb'
                }}
                onMouseMove={(event) => {
                    this.captureMousePixel(event);
                }}>

            </canvas>
        );
    }
}

class DetailsPane extends React.Component {
    render() {
        return (<div id="detailsPane" style={{
            position: 'relative',
            top: '50%',
            margin: 'auto',
            height: '100px',
            width: '200px',
            border: '1px solid #bbb'
        }}>
        </div >
        );
    }
}

export default class FloodFill extends React.Component {

    constructor(props) {
        super(props);
        this.getCustomImage = this.getCustomImage.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.state = {
            hasImage: false,
            alert: null,
            background: '#fff',
        }
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    getCustomImage(event) {
        var self = this;
        var URL = window.URL, img = new Image();
        var url = URL.createObjectURL(event.target.files[0]);
        img.onload = function () {
            var canvas = document.getElementById("cusImage");
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, 250, 250);
            self.setState({ hasImage: true, alert: 'Click at position in image to start flood fill with color of choice' }, () => {
                setTimeout(() => {
                    self.setState({ alert: null });
                }, 4000);
            });
        }
        img.src = url;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        {
                            this.state.alert &&
                            <Alert color="primary">
                                {this.state.alert}
                            </Alert>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Card style={{ border: '1px solid rgba(22,45,167,0.9)' }}>
                            <CardHeader>Flood Fill Algorithm on Custom Image</CardHeader>
                            <CardBody className="text-center">
                                <CardTitle>Choose Custom Image</CardTitle>
                                <InputGroup>
                                    <Input id="getCustomImage" type="file" placeholder="Custom Image" onChange={this.getCustomImage} />
                                </InputGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    {
                        this.state.hasImage &&
                        <Col sm={6}>
                            <SketchPicker
                                color={this.state.background}
                                onChangeComplete={this.handleChangeComplete}
                            />
                        </Col>
                    }
                </Row>
                <Row>
                    <Col sm={5}>
                        <CanvasImage />
                    </Col>
                    <Col sm={5}>
                        <DetailsPane />
                    </Col>
                </Row>
            </Container>
        );
    }

}