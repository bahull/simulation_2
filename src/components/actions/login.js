
import axios from 'axios';

export const login =(username, password) => {
          axios.get('./api/login', {username: username, password: password})
          .then((response) => {
            if (response === "Authenticated"){
                this.props.history.push('/dashboard')
            } else {
                alert('Create an account!')
            }
        })

     }
