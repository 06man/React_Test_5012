
import React, { Component } from 'react';

class EventPractice extends Component {
    //추가1
    state = {
        message: ''
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    //추가2,
                    value={this.state.message}
                    //추가3
                    onChange={(e) => {
                        this.setState({
                            message: e.target.value
                        });
                    }}
                />
            </div>
        );
    }
}

export default EventPractice;