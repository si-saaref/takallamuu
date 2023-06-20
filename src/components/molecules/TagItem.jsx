export default function TagItem({ title, clickable = true, onClick, selectedCategory }) {
	return (
		<button
			className={`tag-item ${!clickable && 'mute-tag'} ${
				selectedCategory === title && 'selected-tag'
			}`}
			onClick={onClick}
		>{`#${title}`}</button>
	);
}
