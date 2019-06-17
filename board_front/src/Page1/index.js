import React, {Component} from 'react';

class Page1 extends Component {
    render() {
        return (
            <div>
                <input id="title" onChange="" onKeyPress=""/><br/>
                <input id="content" onChange="" onKeyPress=""/><br/>
                <button>확인</button>
                <button>취소</button>
            </div>
        );
    }
}

export default Page1;