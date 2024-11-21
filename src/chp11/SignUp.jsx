import React, {useState} from "react";
import "./SignUp.css"


function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("남자")
    const [interests, setInterests] = useState("")

    const handleSubmit = event =>{
        event.preventDefault()
        alert(`
        이름 : ${name}
        이메일 : ${email}
        성별 : ${gender}
        관심사 : ${interests}
        `)
    }

    const handlChange = (event) => {
        const{target} = event
        switch(target.id){
            case "name":
                setName(target.value.toLocaleUpperCase())
                break
            case "password":
                setPassword(target.value)
                break
            case "email":
                setEmail(target.value)
                break
            case "gender":
                setGender(target.value)
                break
            case "interests":
                setInterests(target.value)
                break
        }
    }

    return(
        <div className='signup-container'>
            <h2>회원가입</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text"
                       id="name"
                       value={name}
                       onChange={handlChange}
                       required
                />
            </label>
            <label>
                이메일:
                <input type="email"
                       id="email"
                       value={email}
                       onChange={handlChange}
                       required
                />
            </label>
            <label>
                비밀번호:
                <input type="password"
                       id="password"
                       value={password}
                       onChange={handlChange}
                       required
                />
            </label>
            <label>
                성별:
                <select type="gender"
                        id="gender"
                        value={gender}
                        onChange={handlChange}
                        required>
                    <option>남성</option>
                    <option>여성</option>
                    <option>기타</option>
                </select>

            </label>
            <label>
                관심사:
                <textarea value={interests}
                          id="interests"
                          onChange={handlChange}
                          required></textarea>
            </label>
            <button type="submit" >제출</button>
            </form>
        </div>
    )
}

export default SignUp