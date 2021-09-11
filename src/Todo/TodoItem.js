import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {
	const { removeTodo } = useContext(Context);
	let classes = [];
	if (todo.complited) {
		classes.push("done");
	}
	return (
		<li>
			<span className={classes.join(" ")}>
				<input type="checkbox" checked={todo.complited} onChange={() => onChange(todo.id)} />
				<strong>{index + 1} &nbsp;</strong>
				{todo.title}
			</span>
			<button className="cross" onClick={() => removeTodo(todo.id)}>
				&times;
			</button>
		</li>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired,
};

export default TodoItem;
