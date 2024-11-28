import React, {useState} from "react";
import styles from "./DistanceConverter.module.css"
import DistanceInput from "./DistanceInput";

function toKilometers(miles){
    return miles * 1.60934
}

function tomiles(kilometers){
    return kilometers / 1.60934
}

function tryConverter(distance, convert){
    const input = parseFloat(distance);

    if(Number.isNaN(input)){
        return ""
    }

    const output = convert(input)
    const rounded = Math.round(output*1000)/1000
    return rounded.toString()
}

function DistanceConverter(){
    const [distance, setDistance] = useState('')
    const [unit, setUnit] = useState('km')

    const handleKilometerChange = (distance) =>{
        setDistance(distance)
        setUnit("km")
    }

    const handlemileChange = (distance) =>{
        setDistance(distance)
        setUnit("mile")
    }

    const kilometer = unit === 'mile' ? tryConverter(distance,toKilometers):distance
    const mile = unit === 'km' ? tryConverter(distance,tomiles):distance

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>거리 단위 변환기</h1>
            <div className={styles.inputContainer}>
                <DistanceInput unit={"km"} distance={kilometer} onDistanceChange={handleKilometerChange}/>
                <DistanceInput unit={"mile"} distance={mile} onDistanceChange={handlemileChange}/>
            </div>
            <p className={styles.result}>
                {kilometer}km는 {mile}마일입니다.
            </p>
        </div>
    )
}

export default DistanceConverter