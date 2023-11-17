import React, {useEffect} from 'react'

function Message({message, timeout, showMessage, setShowMessage, ...props}) {
    useEffect(()=>{
        //console.log("messagetouser ",message);
        setTimeout(()=>{setShowMessage(false)},timeout)
    },[showMessage, setShowMessage,timeout]);
  return (
    <div className={showMessage? "message" : "message-hidden"}>{message}</div>
  )
}

export default Message