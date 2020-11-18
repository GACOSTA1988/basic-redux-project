import React, {useState} from 'react'

export const AddPostForm = ()=> {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitlleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  return (
    <section>
      <h2>Add Yo Shit</h2>
      <form>
        <label htmlFor="posttitle">Post Title:</label>
        <input
        type="text"
        id="postTitle"
        name="postTitle"
        value={title}
        onChange={onTitlleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
        id="postContent"
        name="postContent"
        value={content}
        onChange={onContentChanged}
        />
        <button type="button">Save dis shit</button>
        </form>
      </section>
  )
}