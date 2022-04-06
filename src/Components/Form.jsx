import { useState } from "react";  
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {   txt:"Promener le chien", id: uuidv4()}, 
        {    txt:"Faire les courses", id: uuidv4()},
        {    txt:"Sport", id: uuidv4()},
    ])

    const [stateInput, setStateInput] = useState()

    const deleteElement = (id) => {
        const filteredState = dataArr.filter(item => item.id !== id);
        setDataArr(filteredState);
    }

    const linkedInput = (e) => {
        setStateInput(e)
    }

    const addToDo = (e) => {
        e.preventDefault();
        const newArr=[...dataArr]

        const newToDo = {};
        newToDo.txt = stateInput;
        newToDo.id = uuidv4();

        newArr.push(newToDo);
        setDataArr(newArr);
        setStateInput("");

    }


    return (
        <div className="m-auto px-4 col-12 col-sm10 col-lg-6">

            <form onSubmit={(e)=>addToDo(e)}className="mb-3">
                <label htmlFor="todo" className="form-label">Choses à faire</label>
                <input onInput={e=>linkedInput(e.target.value)} value={stateInput} type="text" className="form-control" id="todo"/>
                <button className="btn btn-primary mt-2 d-block">Envoyer</button>
            </form>
            <h2>Liste des choses à faire</h2>
            <ul className="list-group">
              {dataArr.map((item) => {
                return <Item key={item.id} txt={item.txt} id={item.id} delFunc={deleteElement} />
              })}
              </ul>

        </div>
    )
}