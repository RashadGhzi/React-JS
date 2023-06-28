const Evnt = (props) => {
    function handleClick(e) {
        e.preventDefault();
        console.log('Button Clicked ', e);
    }

    return (
        <>
            <div className="name">Hello I am {props.name}</div>
            <div className="role">Hello I am a {props.role}</div>
            {/* <button className="btn">click</button> */}
            <a href="https://www.facebook.com" className="btn" onClick={handleClick}>click</a>
        </>
    )
}

export default Evnt