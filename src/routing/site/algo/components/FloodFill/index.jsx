import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  InputGroup,
  Input,
  Alert,
} from 'reactstrap';
import SketchPicker from 'react-color';

class CanvasImage extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  }

  captureMousePixel(event) {
    let image = document.getElementById('cusImage'),
      details = document.getElementById('detailsPane');
    let imageData = image
      .getContext('2d')
      .getImageData(
        event.nativeEvent.offsetX,
        event.nativeEvent.offsetY,
        image.width,
        image.height
      );
    let pixelData = imageData.data;
    details.innerHTML =
      'R: ' +
      pixelData[0] +
      '<br>G: ' +
      pixelData[1] +
      '<br>B: ' +
      pixelData[2] +
      '<br>A: ' +
      pixelData[3];
  }

  hexToRgb = (hex) =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => '#' + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));

  fillPixel(fillColor, xPos, yPos, firstRgb, image) {
    if (xPos < 0 || xPos > image.width || yPos < 0 || yPos > image.width) {
      return;
    }

    let pixelData = image
      .getContext('2d')
      .getImageData(xPos, yPos, image.width, image.height).data;

    if (
      pixelData[0] !== firstRgb[0] ||
      pixelData[1] !== firstRgb[1] ||
      pixelData[2] !== firstRgb[2]
    ) {
      return;
    }

    let rgb = this.hexToRgb(fillColor);
    let imageData = image.getContext('2d').createImageData(1, 1);

    pixelData = imageData.data;
    pixelData[0] = rgb[0];
    pixelData[1] = rgb[1];
    pixelData[2] = rgb[2];
    pixelData[3] = 255;

    image.getContext('2d').putImageData(imageData, xPos, yPos);

    // Flood fill recursion
    setTimeout(() => {
      this.fillPixel(fillColor, xPos + 1, yPos, firstRgb, image);
    }, 20);
    setTimeout(() => {
      this.fillPixel(fillColor, xPos + 1, yPos - 1, firstRgb, image);
    }, 20);
    setTimeout(() => {
      this.fillPixel(fillColor, xPos + 1, yPos + 1, firstRgb, image);
    }, 20);
    setTimeout(() => {
      this.fillPixel(fillColor, xPos, yPos - 1, firstRgb, image);
    }, 20);
    setTimeout(() => {
      this.fillPixel(fillColor, xPos, yPos + 1, firstRgb, image);
    }, 20);
    setTimeout(() => {
      this.fillPixel(fillColor, xPos - 1, yPos, firstRgb, image);
    }, 20);
    setTimeout(() => {
      this.fillPixel(fillColor, xPos - 1, yPos + 1, firstRgb, image);
    }, 20);
    setTimeout(() => {
      this.fillPixel(fillColor, xPos - 1, yPos - 1, firstRgb, image);
    }, 20);
  }

  render() {
    return (
      <canvas
        id='cusImage'
        width='360'
        height='360'
        style={{
          cursor: 'crosshair',
          margin: '5% auto',
          border: '1px solid #bbb',
        }}
        onMouseMove={(event) => {
          this.captureMousePixel(event);
        }}
        onClick={(event) => {
          let xPos = event.nativeEvent.offsetX;
          let yPos = event.nativeEvent.offsetY;

          let image = document.getElementById('cusImage');
          let imageData = image
            .getContext('2d')
            .getImageData(xPos, yPos, image.width, image.height);
          let originalRgb = imageData.data;

          this.fillPixel(this.props.fill, xPos, yPos, originalRgb, image);
        }}
      ></canvas>
    );
  }
}

class DetailsPane extends React.Component {
  render() {
    return (
      <div
        id='detailsPane'
        style={{
          position: 'relative',
          top: '50%',
          margin: 'auto',
          height: '100px',
          width: '200px',
          border: '1px solid #bbb',
        }}
      ></div>
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
    };
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  getCustomImage(event) {
    var self = this;
    var URL = window.URL,
      img = new Image();
    let file = event.target.files[0];

    if (file.type.indexOf('image') === -1) {
      self.setState(
        { hasImage: false, alert: 'Please upload an image' },
        () => {
          setTimeout(() => {
            self.setState({ alert: null });
          }, 5000);
        }
      );
      return;
    }
    var url = URL.createObjectURL(file);
    img.onload = function () {
      self.setState(
        {
          hasImage: true,
          alert:
            'Click at position in image to start flood fill with color of choice',
        },
        () => {
          var canvas = document.getElementById('cusImage');
          var ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, 360, 360);

          setTimeout(() => {
            self.setState({ alert: null });
          }, 5000);
        }
      );
    };
    img.src = url;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            {this.state.alert && (
              <Alert color='primary'>{this.state.alert}</Alert>
            )}
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Card style={{ border: '1px solid rgba(22,45,167,0.9)' }}>
              <CardHeader>Flood Fill Algorithm on Custom Image</CardHeader>
              <CardBody className='text-center'>
                <CardTitle>Choose Custom Image</CardTitle>
                <InputGroup>
                  <Input
                    id='getCustomImage'
                    type='file'
                    placeholder='Custom Image'
                    onChange={this.getCustomImage}
                  />
                </InputGroup>
              </CardBody>
            </Card>
          </Col>
          {this.state.hasImage && (
            <Col sm={6}>
              <SketchPicker
                color={this.state.background}
                onChangeComplete={this.handleChangeComplete}
              />
            </Col>
          )}
        </Row>
        <Row>
          <Col sm={6}>
            {this.state.hasImage && (
              <CanvasImage fill={this.state.background} />
            )}
          </Col>
          <Col sm={6}>
            <DetailsPane />
          </Col>
        </Row>
      </Container>
    );
  }
}
