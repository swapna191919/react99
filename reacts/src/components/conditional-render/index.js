const ConditionalRender = () => {
    let arryOfObjects = [
        {
            name: "Kiran",
            marks: 37,
            id:1
        },
        {
            name: "Antony",
            marks: 90,
            id:2
        }, {
            name: "Praveen",
            marks: 85,
            id:3
        },
        {
            name: "Divya",
            marks: 98,
            id:4
        }, {
            name: "Akhila",
            marks: 85,
            id:5
        }
    ]

    return (
        <div>
            {
                arryOfObjects.map((eachObject) => {
                    const { marks, name , id} = eachObject
                    return (
                        <div key={id}  >
                            <h4>{name}</h4>
                            <h4>Marks obtained {marks}</h4>
                            {

                                marks > 90 ? <h5>Secured A+ grade</h5> : marks > 80 ? <h5>Secured A grade</h5> : marks > 60 ? <h5>Secured B+</h5> : marks > 40 ? <h5>Pass</h5> : <h5>Better luck next time, Your near to goal</h5>
                            }
                            <div style={{ width: "30%", height: 2, backgroundColor: "red" }} />

                        </div>
                    )
                })
            }







        </div>

    )
}
export default ConditionalRender

export const NC =()=>{
    return(
        <div><h1>amma</h1></div>
    )
}