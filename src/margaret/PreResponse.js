const PreResponse = (props) => {
    return(
    <div>
    <h1>🌼 🌼 🌼 DAISY WISHES 🌼 🌼 🌼</h1>
    <p><span>{props.question}</span></p>
    <div className="images">
      <figure>
        <img className='pre' src="1.png" onClick={props.callback1}/>  {/* alex's code goes here */}
        <figcaption>{props.caption1}</figcaption>
      </figure>
      <figure>
        <img className='pre' src="2.png" onClick={props.callback2}/>  {/* alex's code goes here */}
        <figcaption>{props.caption2}</figcaption>
      </figure>
    </div>
    </div>
    )
}
export default PreResponse;