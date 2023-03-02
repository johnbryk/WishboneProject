const PostResponse = (props) => {
    return(
    <div>
    <h1>🌼 🌼 🌼 DAISY WISHES 🌼 🌼 🌼</h1>
    <p><span>{props.question}</span></p>
    <div className="images">
      <figure>
        <img className='post' src="1.png"/>
        <figcaption>{props.caption1}</figcaption>
        <div class="centered">{props.percent1}%</div> {/* alex's code goes here */}
      </figure>
      <figure>
        <img className='post' src="2.png"/>
        <figcaption>{props.caption2}</figcaption>
        <div class="centered">{props.percent2}%</div> {/* alex's code goes here */}
      </figure>
    </div>
    </div>
    )
}
export default PostResponse;