import React from 'react'

const NotifyComponent = ({ notify }) => {
  if (notify) {
    const { message, style } = notify
    return (
      <div className={style}>
        <p>{message}</p>
      </div>
    )
  }
  return <></>
}
export default NotifyComponent
