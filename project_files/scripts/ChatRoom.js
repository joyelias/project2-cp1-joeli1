import * as React from 'react';
import { Socket } from './Socket';

export class ChatRoom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            username: 'Anonymous'
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
    
        // this is a local variable so we don't need to initialize in the constructor
        console.log('message written: ', this.state.value);
        Socket.emit('new message', {
            'username': this.state.username,
            'message': this.state.value,
        });
        console.log('Sent a message to the server!');
        this.setState({value:''});
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label style={{ color:'white' }}>
            Username:
            <input value={this.state.username} onChange={this.handleUsernameChange}/>

            Message:
            <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}