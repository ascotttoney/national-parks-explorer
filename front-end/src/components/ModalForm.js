import React from 'react';

export default function ModalForm(props) {
	return (
		<React.Fragment>
			<form>
				<div className="form-group">
					<label>Trip Title</label>
					<input
						required
						type="text"
						id="title"
						className="form-control"
						name="title"
						value={props.form.title}
						onChange={props.handleFormChange}
						placeholder="My Awesome Trip"
					/>
					<label>Trip Review</label>
					<textarea
						name="description"
						id="description"
						className="form-control"
						value={props.form.description}
						onChange={props.handleFormChange}
					/>
					<div className="row">
						<div className="col-sm-6">
							<label>Season</label>
							<select
								name="season"
								className="form-control"
								onChange={props.handleFormChange}
								required
							>
								<option value=""></option>
								<option value="Spring">Spring</option>
								<option value="Summer">Summer</option>
								<option value="Fall">Fall</option>
								<option value="Winter">Winter</option>
							</select>
						</div>
						<div className="col-sm-6">
							<label>Year</label>
							<input
								type="text"
								id="year"
								className="form-control"
								name="year"
								value={props.form.year}
								onChange={props.handleFormChange}
								placeholder="2018"
								required
							/>
						</div>
					</div>
				</div>
			</form>
		</React.Fragment>
	);
}
