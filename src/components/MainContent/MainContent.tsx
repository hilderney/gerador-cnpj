import { useState } from "react"

export function AppMainContent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Hello World!')

    function clickBtn() {
        if (count <= 5) {
            setCount(clicked => clicked + 1)
        }
        
        if (count === 3)
            alert('Para de clickar!!!')

        if (count === 5)
            setName('Para de clickar!!! DESGRAÇA')
    }



    return (
        <div className="main-content">
            <h1>
            {name}
            </h1>
            <button onClick={clickBtn}>
                Não me clic!!!
            </button>
            <p>
                Clicks {count}
            </p>
        </div>
    )
}