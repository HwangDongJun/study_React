import React, { Component } from 'react';

class PhoneInfo extends Component {
    render() {
        const { name, phone, id } = this.props.infomation; //infomation값을 전달 받아서 name, phone, id를 추출한다.
        
        const style = { //간단한 style정의
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        }

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;