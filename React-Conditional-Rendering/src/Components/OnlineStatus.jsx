import React from 'react'

const OnlineStatus = ({isOnline}) => {
  return (
    <div>
      {isOnline && <h1>🟢 User Online</h1>}
    </div>
  )
}

export default OnlineStatus
