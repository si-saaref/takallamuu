export default function TagItem({ title, clickable = true }) {
	return <button className={`tag-item ${!clickable && 'mute-tag'}`}>{`#${title}`}</button>;
}
