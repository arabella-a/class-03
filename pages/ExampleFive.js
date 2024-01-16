import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function ExampleFive(){

    // we want to set up a counter
    // after every one second the number increases by one
    // we want to display that number on screen as it increases
    // no button is needed it will update automatically

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count])
    return(
        <>
            <Header/>
            <main>
                <div>
                    <h1>Number Counter</h1>
                    <h3>Example using Interval</h3>
                    <div>{count}</div>
                </div>
            </main>
            <Footer/>
        </>
    )
}