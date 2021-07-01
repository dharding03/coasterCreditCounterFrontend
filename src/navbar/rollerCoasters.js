import React, {useState} from 'react';
import axios from 'axios';
import { ACCESS_TOKEN_NAME } from '../Login/components/apiConstants';

import Carousel from '../slideshow/controls';
import SearchBar from '../SearchBar/components/searchBar';


function Credits() {
    const [state, setState] = useState({
        coaster: "",
        park: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const sendDetailsToServer = () => {
        if (state.coaster.length && state.park.length) {
            const payload = {
                "coaster": state.coaster,
                "park": state.park,
            }
            const tempApiBaseUrl = "http://localhost:7080"
            let config = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            }
            axios.post(tempApiBaseUrl + "/coasters/credits", payload, config)
                .then(function (response) {
                    if (response.status === 200) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Coaster successfully added!'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                    } else {
                        // props.showError("some error ocurred")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            // props.showError('Something went wrong')
        }
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        sendDetailsToServer();
    }

    return (

        <div>
        <header className="App-header">
            <Carousel />

            <SearchBar />
        </header>

        <div className="card col-12 col-lg-4 addCoaster-card mt-2 hv-center">
            <h2>My Credits</h2>
            <div>
                <form>
                    <div className="form-group text-left">
                        <label htmlFor="addcoaster" type="text">Add Coaster</label>
                        <input
                            type="coaster"
                            className="form-control"
                            id="coaster"
                            placeholder="Add Coaster"
                            value={state.coaster}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="addpark" type="text">Add Park</label>
                        <input type="addPark"
                            className="form-control"
                            id="park"
                            placeholder="Add Park"
                            value={state.park}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmitClick}
                        >Add
                        </button>
                    </div>

                </form>
            </div>
        </div>
        </div>
    )
}


export default Credits;