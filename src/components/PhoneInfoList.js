import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [] //default값으로 []를 정해준다. 아니면 아무것도 전달이 안된다면 error발생
    }

    render() {
        const { data } = this.props;
        const list = data.map( //배열 내장함수 map()을 이용한다.
            infomation => (<PhoneInfo info={infomation} key={infomation.id} />)
        ) //key가 없다면 update나 delete과정이 중간에 추가되는 식이 아니라 전체적인 변경이 이루어지는 귀찮은 과정이 생긴다.
        //그래서 key를 사용해서 update나 delete과정을 간단하게 한다. id는 고유하므로 하나씩만이 존재한다.
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;