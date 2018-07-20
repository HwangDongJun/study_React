import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }
    //변경이 되었을때, 다음과 같은 함수를 불러온다. (e)에서 e는 event객체에 해당한다.
    handleChange = (e) => {
        this.setState({
            //input이 하나일 경우(name) => name: e.target.value이다.
            [e.target.name]: e.target.value, //이벤트가 발생했을때, ex)input이 가지고있는 value값을 name에 넣는다.
            [e.target.phone]: e.target.value
        });
    }

    render() {
        return (
            //여러개의 input을 관리하기 위해서는 name으로 구분을 해줄 필요가 있다.
            <form>
                <input name="name" placeholder='이름' onChange={this.handleChange} value={this.state.name} />
                <input name="phone" placeholder='전화번호' onChange={this.handleChange} value={this.state.phone} />
                <div>
                    {this.state.name}
                    {this.state.phone}
                </div>
            </form>
            //우리가 입력하는 값이 곧바로 나타나게 된다.
        );
    }
}

export default PhoneForm;