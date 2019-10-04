    
import * as React from 'react';
import { ChatRoom } from './ChatRoom';
import { Socket } from './Socket';


export class Content extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            'messages': [],
        };
    }
    
    componentDidMount() {
        Socket.on('retrieved messages', (data) => {
            this.setState({
                messages: data['messages']
            });
        });
    }
    
    render() {
        let all_messages = this.state.messages;
        console.log(all_messages[2])
        return (
            <div>
                <ChatRoom />
            </div>
        );
    }
}


    