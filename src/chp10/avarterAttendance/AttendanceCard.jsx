import react from "react";
import './Attendancecard2.css'
import img1 from './imgs/1.jpg'

const students = [
    {id:1, name:"윤이나", grade:2, major:"인공지능소프트워어", avater:"https://randomuser.me/api/portraits/men/1.jpg"},
    {id:2, name:"박지영", grade:3, major:"전기", avater:"https://randomuser.me/api/portraits/women/2.jpg"},
    {id:3, name:"이예원", grade:3, major:"그린에너지", avater:"https://randomuser.me/api/portraits/men/3.jpg"},
    {id:4, name:"황유민", grade:4, major:"시각디자인", avater:"https://randomuser.me/api/portraits/women/4.jpg"},
    {id:5, name:"박현경", grade:1, major:"인공지능소프트워어", avater:"https://randomuser.me/api/portraits/men/5.jpg"},
    {id:6, name:"이동은", grade:1, major:"인공지능소프트워어", avater:"https://randomuser.me/api/portraits/women/6.jpg"},
    {id:7, name:"장원영", grade:1, major:"인공지능소프트워어", avater:"https://randomuser.me/api/portraits/men/7.jpg"},
    {id:8, name:"안유진", grade:1, major:"인공지능소프트워어", avater:"https://randomuser.me/api/portraits/women/8.jpg"},
    {id:9, name:"아바타", grade:1, major:"인공지능소프트워어", avater:"https://randomuser.me/api/portraits/women/9.jpg"},
    {id:10, name:"아바타", grade:1, major:"인공지능소프트워어", avater:img1}
]

function AttendanceCard(){
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">학생 사진 출석부</h2>
            <div className="card-container">
                {
                    students.map((student)=>(

                        <div className="student-card">
                            <img className="student-avatar" src = {student.avater} alt = {student.name}/>
                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p>{student.grade}학년 | {student.major}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AttendanceCard