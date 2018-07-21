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

    handleSubmit = (e) => { //등록버튼을 클릭을 하게되면 자동 새로고침을 하는데, 우리는 필요가 없기 때문에
        e.preventDefault(); //원래의 기능을 하지 못하게 방지한다.
        this.props.onCreate({ //자식인 PhoneForm이 App인 부모에게 변수를 전달한다.
            name: this.state.name,
            phone: this.state.phone
        });
        this.setState({
            name: '',
            phone: '',
        })
    }

    render() {
        return (
            //여러개의 input을 관리하기 위해서는 name으로 구분을 해줄 필요가 있다.
            //onSubmit={this.handleSubmit} 제출할때 이와 같이 실행을 한다.
            <form onSubmit={this.handleSubmit}>
                <input name="name" placeholder='이름' onChange={this.handleChange} value={this.state.name} />
                <input name="phone" placeholder='전화번호' onChange={this.handleChange} value={this.state.phone} />
                <button type="submit">등록</button>
            </form>
            //우리가 입력하는 값이 곧바로 나타나게 된다.
        );
    }
}

export default PhoneForm;