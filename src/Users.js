import UserItem from './UserItem';
import Card from './Card';
import './Users.css';


function Users(props) {
        return (
          props.user_list.map((props) => {
            return (
              <Card className="users">
              <UserItem 
                name = {props.name}
                cover = {props.cover}
                delete = {props.delete}
              />
              </Card>
            )})

        )
    
  }

export default Users;
