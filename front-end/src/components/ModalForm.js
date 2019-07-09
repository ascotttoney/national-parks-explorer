import React from 'react'

export default function ModalForm(props) {
  console.log(props);
  return (
    <React.Fragment>
      <h4>Centered Modal</h4>
      <form>
        <label>
          Trip Title:
          <input type="text" name="title" value={props.form.title} onChange={props.handleFormChange} placeholder="My Awesome Trip" />
        </label>
        <label>
          Trip Review:
          <textarea name="description" value={props.form.description} onChange={props.handleFormChange} />
        </label>
        <label>
          Season:
          <select name="season" onChange={props.handleFormChange}>
            <option value="">Select</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
          </select>
        </label>
        <label>
          Year:
        <input type="text" name="year" value={props.form.year} onChange={props.handleFormChange} placeholder="2018" />
        </label>
      </form>
    </React.Fragment>
  )
}
