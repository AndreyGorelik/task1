
import "./subscribebtn.css"

const SubscribeBtn = ({subscribers}) => {
    return (
        <button className="subscribe_btn">
            Subscribe {subscribers}
        </button>
    )
}

export default SubscribeBtn;