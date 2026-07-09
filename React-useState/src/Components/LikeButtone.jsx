import React, { useState } from 'react'

const LikeButtone = () => {
    const [like, setLike] = useState(0)

    function likeCount() {
        setLike(like + 1)
    }
  return (
    <div>
      <h1>Likes: {like}</h1>
      <button onClick={likeCount}>Like</button>
    </div>
  )
}

export default LikeButtone
