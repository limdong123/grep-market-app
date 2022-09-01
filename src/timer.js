import React from "react";

const TimerComponent = () => {
    const [time, setTime] = React.useState(0)

    console.log("컴포넌트 업데이트")

    React.useEffect(() => {
        setTime(time + 1)
    }, [])

    return (
        <div>
            <h3>{time}초</h3>
            <button onClick={() => {
                setTime(time + 1)
            }} >1씩 늘리기</button>
        </div>
    )
}

export default TimerComponent