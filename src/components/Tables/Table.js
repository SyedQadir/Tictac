import React from 'react';
// import './Table.css';

const Table = (props) => {
	let square = {
		width: '30px',
		height: '30px',
		border: '1px solid white',
		display: 'inline-block'
	}

	return (
		<div style={square}  onClick={props.click}  boardnumber={props.tableid}>
			<styledSpan >{props.status}</styledSpan>
		</div>
	);

}

export default Table;