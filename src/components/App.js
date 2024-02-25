// create your App component here
import React, { useEffect, useState } from "react";

function App () {
    const [isLoaded, setIsLoaded] = useState(false);
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then(data => {
            setImage(data.message);
            setIsLoaded(true);
      });
    }, []);

    //   if (!image) {
    //     return <p>Loading...</p>
    //   }
    if (!isLoaded) return <p>Loading...</p>;

    return (
        <>
            <h1>Dog CEO</h1>
            <img src={image} alt="A Random Dog"/>
        </>
        
    )
}

export default App;