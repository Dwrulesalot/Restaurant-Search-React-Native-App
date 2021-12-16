import axios from "axios"; 

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 6o7RY3434_IzeiDuLwnD9S7UWguMb-zLqrEpS835Atm_Y5y_jMLa1O5z54wvG72vk53Fj9HMDs8_Y3kARZfrNV45A87IXTIDugGTWy39DlAaBka6oEpI0iozooSeYXYx' //api key
    }
});