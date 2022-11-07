
import axios from "axios";

export {};

let url: string = 'https://www.youtube.com/';

axios.get(url).then(function (response) {

    // let jsonObj: number = JSON.parse(response.data[0].id);
    console.log(response);

});
