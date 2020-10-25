import { useEffect, useState } from "react";
import axios from 'axios';
import { DB_URL } from '../database/db';

const useAllTodos = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    const getAllTodos = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${DB_URL}/todos`);
            setData(response.data);
        } catch (error) {
            console.log("Could not load todos! " + error);
        }
        setLoading(false);
    }

    useEffect(() => {
        getAllTodos();
    });

    const reload = () => getAllTodos();

    return { data, loading, reload }
}

export default useAllTodos;