import axios from "axios";
import history from "./../history";

export const login = (username, password) => {
  if (username.length > 0 && password.length > 0) {
    axios
      .post("/api/login", { username, password })
      .then(response => {
        if (response.data === "Authenticated") {
          history.push("/dashboard");
        } else {
          alert("Create an account!");
        }
      })
      .catch(error => console.log(error));
  } else {
    alert("Give me cookie!");
  }
};

export const signUp = (username, password) => {
  if (username.length > 0 && password.length > 0) {
    axios
      .post("/api/signup", { username, password })
      .then(res => history.push("/dashboard"))
      .catch(error => console.log(error));
  } else {
    return " ";
  }
};

// export const filter = (desiredRent) => {
//     if (desiredRent.length > 0){
//         axios.post('/api/filtered', {desiredRent})
//         .then(res.)
//     } else {
//        return  " "
//     }
// }

export const complete = (
  propertyName,
  propertyDescript,
  address,
  city,
  state,
  zip,
  imageUrl,
  loanAmount,
  monthlyMortgage,
  desiredRent
) => {
  axios
    .post("/api/addProp", {
      propertyName,
      propertyDescript,
      address,
      city,
      state,
      zip,
      imageUrl,
      loanAmount,
      monthlyMortgage,
      desiredRent
    })
    .then(res => res.status(200).send())
    .catch(err => console.log(err));
};
