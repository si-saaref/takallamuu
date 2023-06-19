export default function TagItem({ title }) {
	return <button className='tag-item'>{`#${title}`}</button>;
}
