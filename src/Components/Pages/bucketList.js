import React, {useState, useEffect} from 'react';
import {useTable} from 'react-table';
import axios from 'axios';
import {ACCESS_TOKEN_NAME} from "../Login/components/apiConstants";
import Carousel from '../Slideshow/Controls';

import './bucketList.css';
import {AiFillDelete} from "react-icons/all";
import * as credits from "mysql";


function BucketList(factory, deps) {

    const [bucketList, setBucketList] = useState([])
    useEffect(() => {
        fetch("http://localhost:7080/bucketlist")
            .then(response => response.json())
            .then(json => {
                setBucketList(json)
                setState(prevState => ({
                    ...prevState,
                    bucketList: json
                }))
            });
    }, []);

    const [state, setState] = useState({
        coaster: "",
        park: "",
        bucketList: bucketList,
        successMessage: ""
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const storeBucketListItem = () => {
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
            axios.post(apiBaseUrl + "/bucketlist", payload, config)
                .then(function (response) {
                    if (response.status === 200) {
                        setState(prevState => ({
                            ...prevState,
                            bucketList: [...prevState.bucketList, JSON.parse(response.config.data)],
                            'successMessage': 'Coaster successfully added!'
                        }))
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
        storeBucketListItem();
        setState(prevState => ({
            ...prevState,
            coaster: "",
            park: ""
        }))
    }

    const deleteBucketlistItem = (id) => {

        let config = {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }

        axios.delete(`http://localhost:7080/coasters/bucketlist/${id}`, config)
            .then(function (response) {
                if (response.status === 200) {
                    alert("It is done")
                    setState((prevState => ({
                        ...prevState,
                        bucketList: prevState.bucketList.filter(bucketList => bucketList.id !== id)
                    })))
                }
                console.log(response)
            })
            .catch(function (error) {
                console.log('error', error);
            })
    }


    // const moveToCredits = (id) => {
    //     let config = {
    //         headers: {
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //     }
    //
    //     axios.post("http://localhost:7080/credits", config)
    //         .then(function (response) {
    //             if (response.status === 200) {
    //                 setState(prevState => ({
    //                     ...prevState,
    //                     credits: [...prevState.credits, JSON.parse(response.config.data)]
    //                 }))
    //                 // credits.push(JSON.parse(response.config.data))
    //                 // localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token)
    //             }
    //         })
    // }


    return (
        <div className=" col-12 col-lg-6 addCoaster-card mt-2 hv-center">

            <h2>My Bucket List</h2>
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
                        {state.bucketList.map((bucketList, index) =>
                            <tr key={index}>
                                <td>
                                    {bucketList.coaster}

                                </td>
                                <td>
                                    {bucketList.park}
                                </td>
                                <td>
                                    <button onClick={() => deleteBucketlistItem(bucketList.id)}><AiFillDelete/></button>
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


export default BucketList;