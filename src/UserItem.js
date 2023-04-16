import './UserItem.css';
import Card from './Card';

function UserItem(props) {

return (
    <Card className='card'>
        <div className= "item">
          <img src={props.cover} alt={props.name} className='bookcover' />
          <h2 className='booktitle'>{props.name}</h2>
          <img src={props.delete} alt="delete" className='delete' />
        </div>
    </Card>
      );
    }

export default UserItem;