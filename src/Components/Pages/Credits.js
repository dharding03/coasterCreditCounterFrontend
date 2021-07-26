import React, {useState, useEffect} from 'react';
import { IconName } from "react-icons/fa";
import axios from 'axios';
import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../Login/components/apiConstants";
import Carousel from '../Slideshow/Controls';


import './Credits.css';
import {AiFillDelete} from "react-icons/all";


function Credits() {
    const [credits, setCredits] = useState([])

    useEffect(() => {
        fetch("http://localhost:7080/credits")
            .then(response => response.json())
            .then(json => {
                setCredits(json)
                setState(prevState => ({
                    ...prevState,
                    credits: json
                }))
            });
    }, []);
    const [state, setState] = useState({
        coaster: "",
        park: "",
        credits: credits,
        successMessage: ""
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const storeCreditsItem = () => {
        if (state.coaster.length && state.park.length) {
            const payload = {
                "coaster": state.coaster,
                "park": state.park,
            }
            const apiBaseUrl = "http://localhost:7080"
            let config = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            }
            axios.post(apiBaseUrl + "/credits", payload, config)
                .then(function (response) {
                    if (response.status === 200) {
                        setState(prevState => ({
                            ...prevState,
                            credits: [...prevState.credits, JSON.parse(response.config.data)],
                            "successMessage": "Coaster successfully added!"
                        }))
                        credits.push(JSON.parse(response.config.data))
                        localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                    } else {
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
        }
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        storeCreditsItem();
        setState(prevState => ({
            ...prevState,
            coaster: "",
            park: ""
        }))
    }

    const deleteCreditsItem = (id) => {
        let config = {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }

        axios.delete(`http://localhost:7080/credits/${id}`, config)
            .then(function (response) {
                if (response.status === 200) {
                    window.confirm("Are you sure you'd like to delete this?")
                    setState((prevState => ({
                        ...prevState,
                        credits: prevState.credits.filter(credit => credit.id !== id)
                    })))
                }
                console.log(response)
            })
            .catch(function (error) {
                console.log('error', error);
            })
    }

    return (
        <div className=" col-12 col-lg-6 addCoaster-card mt-2 hv-center">
            <h2>My Credits</h2>


            <Carousel/>


            <div>
                <div>
                    <table cellPadding={5} cellSpacing={5}>
                        <thead>
                        <tr>
                            <th>Coaster</th>
                            <th>Park</th>
                        </tr>
                        </thead>
                        <tbody>

                        {state.credits.map((credit, index) =>
                            <tr key={index}>

                                <td>
                                    {credit.coaster}

                                </td>
                                <td>
                                    {credit.park}
                                </td>
                                <td>
                                    <button onClick={() => deleteCreditsItem(credit.id)}><AiFillDelete /></button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <form>
                    <div className="form-group text-left">
                        <label htmlFor="addcoaster" type="text">Add Coaster</label>
                        <input
                            type="coaster"
                            className="form-control"
                            id="coaster"
                            placeholder="Add Coaster"
                            value={state.coaster}
                            onChange={handleChange}/>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="addpark" type="text">Add Park</label>
                        <input type="addPark"
                               className="form-control"
                               id="park"
                               placeholder="Add Park"
                               value={state.park}
                               onChange={handleChange}/>
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
    )
}


export default Credits;