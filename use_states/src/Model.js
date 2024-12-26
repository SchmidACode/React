import { useState } from "react";
import "./Model.css";

function Model()
{
    let {open, setOpen} = useState(false);
    let image = "https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg"

    return(
        <div>
            <img src={image} 
            className="small" on onClick={()=>setOpen(true)}
            alt="Картинка"
            style={{display:open?"None":"Block"}}
            />
            {
                open &&
                (
                    <div>
                        <div>
                            <img src={image}
                                 alt=""
                                 className="big"
                                 onClick={()=>setOpen(false)}
                                />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Model;
