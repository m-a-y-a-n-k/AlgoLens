import React from 'react';
import Link from "./Link";

export default class Element extends React.Component{

    render(){
        let elStyles,indexStyles,valStyles,element = null;

        switch(this.props.type.toLowerCase()){
            case 'stack':
                element = [];
                if( this.props.data.index === 0){
                    element.push(<span key="Top" style={{margin: 'auto 0'}}>Top</span>);
                }
                element.push(<span key="link">
                    <Link direction='right'/>                            
                </span>);
                elStyles = {
                    border: '1px solid white',
                    padding: '2.4%',
                    color: 'white',
                    background: 'rgba(40,40,160,0.8)'
                }
                if(this.props.highlight){
                    elStyles.background = 'rgba(30,150,40,0.8)';
                }
                valStyles = {
                    position: 'relative',
                    margin: 'auto',
                    fontSize: '18px',
                    textAlign: 'center'
                }
                indexStyles = {
                    position: 'relative',
                    top: '16px',
                    color: 'white',
                    fontSize: '12px',
                    textAlign: 'center'
                }
                element.push(<div key="element" style={elStyles}>
                                <div style={valStyles}>
                                    {this.props.data.value}
                                </div>
                                <div style={indexStyles}>{this.props.data.index}</div>
                            </div>);
                break;
            case 'array':
                elStyles = {
                    border: '1px solid white',
                    padding: '2.4%',
                    color: 'white',
                    background: 'rgba(40,40,160,0.8)'
                }
                if(this.props.highlight){
                    elStyles.background = 'rgba(30,150,40,0.8)';
                }
                valStyles = {
                    position: 'relative',
                    margin: 'auto',
                    fontSize: '18px',
                    textAlign: 'center'
                }
                indexStyles = {
                    position: 'relative',
                    top: '16px',
                    color: 'white',
                    fontSize: '12px',
                    textAlign: 'center'
                }
                element = <span style={elStyles}>
                            <div style={valStyles}>
                                {this.props.data.value}
                            </div>
                            <div style={indexStyles}>{this.props.data.index}</div>
                        </span>
                break;
            case 'linkedlist':
                    elStyles = {
                        border: '1px solid white',
                        padding: '2.4%',
                        color: 'white',
                        background: 'rgba(40,40,160,0.8)'
                    }
                    if(this.props.highlight){
                        elStyles.background = 'rgba(30,150,40,0.8)';
                    }
                    valStyles = {
                        position: 'relative',
                        margin: 'auto',
                        fontSize: '18px',
                        textAlign: 'center'
                    }
                    element = [<span style={elStyles}>
                                <div style={valStyles}>
                                    {this.props.data.value}
                                </div>
                                <div style={indexStyles}>{this.props.data.index}</div>
                    </span>];

                    if(this.props.next)
                    element.push(                           <span>
                        <Link direction='right'/>                            
                    </span>
); 
                break;
            default:
        }

        return (
                this.props.data &&
                element
            );
    }

}