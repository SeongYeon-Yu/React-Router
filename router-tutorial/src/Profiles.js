import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/youme">김너나 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/hwihyeol">반휘혈 프로필</Link>
                </li>
            </ul>

            <Route 
                path="/profiles"
                exact // exact={true} 와 같은 의미
                render={() => <div>사용자를 선택해 주세요.</div>} // 컴포넌트 자체를 전달하는것이 아니라, 보여 주고 싶은 JSX를 넣음
                />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    
    )
}

export default Profiles;