import React from 'react'
import { FaRegCalendar, FaFeatherAlt, FaKiwiBird, FaSun, FaLeaf, FaSnowflake } from 'react-icons/fa'
import { GiFireFlower } from "react-icons/gi";
export default function ModalForm(props) {
  return (
    <React.Fragment>
      <form>
        <div className="form-group" >
          <label>Trip Title <FaKiwiBird /></label>
          <input
            required
            type="text"
            id="title"
            className="form-control"
            name="title"
            value={props.form.title}
            onChange={props.handleFormChange}
            placeholder="My Awesome Trip" />
          <label>Trip Review <FaFeatherAlt /></label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            value={props.form.description}
            onChange={props.handleFormChange} />
          <div className="row">
            <div className="col-sm-6" >
              <label>Season <GiFireFlower /><FaSun /><FaLeaf /><FaSnowflake /></label>
              <select name="season" className="form-control" onChange={props.handleFormChange} required>
                <option value=""></option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="winter">Winter</option>
              </select>
            </div>
            <div className="col-sm-6">
              <label>Year <FaRegCalendar /></label>
              <input
                type="text"
                id="year"
                className="form-control"
                name="year"
                value={props.form.year}
                onChange={props.handleFormChange}
                placeholder="2018"
                required />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment >
  )
}
