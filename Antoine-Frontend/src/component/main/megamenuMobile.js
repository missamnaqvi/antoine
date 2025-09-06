import { useState } from "react";
import rightArrow from '../../assets/images/icons8-left-arrow-48.png'

export default function MegamenuMobile({ megamenu, setMegamenu }) {
    const [subject, setSubject] = useState(false);
    const [browser, setBrowser] = useState(false);
    const [department, setDepartment] = useState(false);
    return (
        <div>
            <ul>
                <li >
                    <img src={rightArrow} onClick={() => { setMegamenu(false) }} style={{ height: '16px' }} alt="" />
                </li>
                <li><b>TOP SUBJECTS </b> {!subject ? <span onClick={() => setSubject(!subject)}>+</span> : <span onClick={() => setSubject(!subject)}>-</span>}
                </li>
                {subject ?
                    megamenu.length > 0 && megamenu[0].topsubject.map((subject, index) => {
                        return (
                            <li key={index}>{subject.name} </li>)
                    }) : ''
                }
            </ul>
            <ul>
                <li><b>BROWSE</b>{!browser ? <span onClick={() => setBrowser(!browser)}>+</span> : <span onClick={() => setBrowser(!browser)}>-</span>}</li>
                {browser ?
                    megamenu.length > 0 && megamenu[0].browse.map((item, index) => {
                        return (
                            <li key={index}>{item.name}</li>)

                    }) : ''
                }
            </ul>
            <ul>
                <li><b>DEPARTMENTS</b>{!department ? <span onClick={() => setDepartment(!department)}>+</span> : <span onClick={() => setDepartment(!department)}>-</span>}</li>
                {department ?
                    megamenu.length > 0 && megamenu[0].departments.map((dept, index) => {
                        return (
                            <li key={index}>{dept.name}</li>
                        )
                    }) : ''
                }
            </ul>
        </div>
    )
}
