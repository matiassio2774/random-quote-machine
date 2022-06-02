import React from 'react'

function QuoteAuthor({ author }) {
  return (
    <div className="quote-author">
      <p className="author">- {author}</p>
    </div>
  )
}

export default QuoteAuthor