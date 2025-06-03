// Join.js
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { createPopup } from '../components/Popup';
import './Login.css'; //Login에서 스타일 공유
import './Join.css';
import apiClient from '../common/apiClient';

const Join = () => {
    const [idInput, setIdInput] = useState('');
    const [pwInput, setPWInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const [isChecked, setIsChecked] = useState(false);

    // 체크박스 상태 변경 핸들러
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const variablClass = `input-box-title ${idInput && pwInput && isChecked ? 'clickable' : '' }`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!isChecked){
            createPopup('약관에 동의해주세요');
            return;
        }
        if (!(idInput && pwInput)){
            createPopup('아이디&비밀번호는 필수 항목입니다')
            return;
        }
        console.log('ID:', idInput, 'Password:', pwInput, 'Eamil:', emailInput);
        
        try {
            const response = await apiClient.post('/user/join', JSON.stringify({name: idInput, password: pwInput, email: emailInput}));
            console.log("회원가입 응답: ", response);
            if (response.ok) {
                createPopup("회원가입이 완료되었습니다!");
                navigate('/login');
            }
            else {
                console.log("회원가입 실패: ", response);
                createPopup(`회원가입 실패: ${response.message}`);
            }
        }
        catch (e) {
            console.log("회원가입 실패: ", e);
            createPopup("회원가입 실패: 알 수 없는 에러가 발생했습니다. ");
        }
    };

    return (
    <div className="login-container">
        <div className='input-box' id='login-box'>
            <h1 onClick={handleSubmit} className={variablClass}>Join</h1>
            <div className='input-group'>
                <div className="privacy-consent-container">
                    {/* 스크롤 가능한 약관 텍스트 박스 */}
                    <div className="terms-box">
                        {/* 약관 내용 TODO: 서버에서 약관 동적으로 받아오기 */}
                        <h2>개인정보 수집&처리방침 동의</h2>
                        <p>
                        이 서비스에서 수집, 사용되는 개인정보의 처리 방식과 약관을 설명합니다. 
                        </p>
                        <ol>
                        <li>
                            <strong>수집 항목</strong>: 닉네임, 이메일 주소, 아이디, 비밀번호 등 사용자가 제공한 정보.
                        </li>
                        <li>
                            <strong>수집 목적</strong>: 서비스 제공, 사용자 문의 응대, 마케팅.
                        </li>
                        <li>
                            <strong>보유 기간</strong>: 회원 탈퇴 시까지, 또는 법적 요구에 따라 일정 기간 보관.
                        </li>
                        <li>
                            <strong>제3자 제공</strong>: 사용자의 동의 없이 제3자에게 제공되지 않으며, 법적 요구가 있을 경우에 한해 제공될 수 있습니다.
                        </li>
                        </ol>
                        <p>
                        * 사용자는 언제든지 개인정보 제공에 대한 동의를 철회할 수 있으며, 이 경우 서비스 이용이 제한될 수 있습니다.
                        </p>
                        <p>
                        * 이 서비스를 이용하여 사용자가 올린 정보의 유출로 피해가 예상될 경우 가명, 다른 사이트에서 이용하지 않는 비밀번호를 사용하여 피해를 방지하세요. 사용자가 업로드하는 정보는 안전하게 보호되지만 강력한 공격에 의해 탈취되었을 경우 이 서비스는 책임을 지지 않습니다. 
                        </p>
                        <p>
                        * 서비스의 종료, 데이터베이스 손실 등 정보의 손실로 인한 피해는 보상되지 않습니다. 중요한 정보는 반드시 백업해 주세요. 
                        </p>
                    </div>

                    {/* 동의 체크박스 */}
                    <div className="checkbox-container">
                        <input
                        type="checkbox"
                        id="consent-checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor="consent-checkbox">
                        개인정보 처리 규칙을 모두 읽었으며, 이해하고 이에 동의합니다. 
                        </label>
                    </div>
                </div>

                <input
                    value={ idInput }
                    onChange={ (e) => setIdInput(e.target.value) }
                    placeholder="ID(닉네임)"
                    type='text'
                    className='input'
                />
                <input
                    value={ pwInput }
                    onChange={ (e) => setPWInput(e.target.value) }
                    placeholder="PASSWORD"
                    type='password'
                    className='input'
                />
                <input
                    value={ emailInput }
                    onChange={ (e) => setEmailInput(e.target.value) }
                    placeholder="Email"
                    type='text'
                    className='input'
                />
            </div>
        </div>

        <div id='place-holder'/>

        <div className='input-box' id='login-box'>
            <NavLink to='/login'><h1 className='clickable input-box-title'>Login</h1></NavLink>
        </div>
    </div>
    );
}

export default Join;