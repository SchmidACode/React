import { useState } from "react";
import "./TaskList.css";

function TaskList()
{
    let [tasks, setTask] = useState
    (
        [
            {
                text:"Сходить в магазин",
                done:false
            },
            {
                text:"Полить цветы",
                done:false
            },
            {
                text:"Покормить кота",
                done:false
            },
            {
                text:"Сходить в магазин",
                done:false
            }
        ]
    )
}