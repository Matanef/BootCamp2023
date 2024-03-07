import Button from './Button'

const Action = (props) =>{
    return (
        <>
            <div>
                <p>Action</p>
                <Button count={props.count} setCount={props.setCount}/>
            </div>
        </>
    )
}

export default Action