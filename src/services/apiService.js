import axios from "axios";

function get (apipath){
    return axios.get(apipath);
}

axios.interceptors.request((config) =>{
  console.log(config);

})


export default get;