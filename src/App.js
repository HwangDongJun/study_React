import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  id = 0; //state에 들어가지 않는 이유: id값은 독립적으로 증가하기 때문에 수정이 되지 않는다.(렌더링되지 않는다.)
  state = {
    info: [],
  }

  handleCreate = (data) => {
    const { info } = this.state //이와같은 방법을 사용해서 info: this.state.info.concat(data)을 줄일 수 있다.
    this.setState ({
      info: info.concat({
        ...data,
        //name: data.name,
        //phone: data.phone 같은 방법도 있다.
        id: this.id++ //id를 0으로 초기화를 시킨 후, 추가를 할때마다 id의 더해져서 들어간다.
      }) //push가 아닌 concat을 사용함에 주의하자!
    })
  }//부모가 자식에게 전달하는 props대신 자식이 부모한테 전달하는 방법이다.(부->자)

  render() {
    return ( //onCreate={this.handleCreate}까지 설정을 한다.(부->자)
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.info)}
      </div>
    ); //{JSON.stringify(this.state.info)}으로 출력한다.
  }
}

export default App;
