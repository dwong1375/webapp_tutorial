import Button from './Button'
const Header = ({title, onAdd, showAddTask}) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button text = {showAddTask? 'Close': 'Add'} onClick = {onAdd}/>
        </header>
    )
}
export default Header
