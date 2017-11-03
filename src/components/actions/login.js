
import axios from 'axios';

export const login =(username, password) => {
          axios.put('./api/login', {username: username, password: password})
          .then((response) => {
            if (response === "Authenticated"){
                this.props.history.push('/dashboard')
                console.log("working")
            } else {
                alert('Create an account!')
            }
        })

     }
