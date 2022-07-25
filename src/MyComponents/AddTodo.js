import React from 'react'

export default function AddTodo({onSubmit}) {
  return (
    <>
       <form className="row g-3" onSubmit={onSubmit}>
            <div className="col-auto">
                <input type="text" className="form-control" id="todo" placeholder="Todo..."/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add</button>
            </div>
        </form>
    </>
  )
}
