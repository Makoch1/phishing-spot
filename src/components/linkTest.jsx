/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function LinkResults({ results }) {
    let keys = 0
    let count = 0
    let queued = false
    let ready = true
    let sussy = 0

    console.log(results)
    
    Object.keys(results).forEach(key => {
        count += results[key]
        keys += 1
    })

    sussy += results["suspicious"]
    sussy += results["malicious"]

    if (keys == 5) {
        if (count == 0) {
            queued = true
        }
    } else {
        ready = false
    }

    let message
    if (ready && !queued) {
        if (sussy > 0) {
            message = "This link has been flagged!"
        } else {
            message = "This link seems safe."
        }
    } else {
        message = ""
    }

    return (
        <div className={sussy > 0? "results sus": "results"}>
        <p className="results-message">{message}</p>
        {
            ready && !queued ?
            Object.keys(results).map(key => <p key={key}> <b>{results[key]}</b> sources say this link is <b>{key}</b></p>) : 
            <p>Your results may not be ready yet, try again in a little bit...</p>
        }
        </div>
    )
}

export default function LinkTest() {
    const [ error, setError ] = useState(false)
    const [ link, setLink ] = useState("")
    const [ result, setResult ] = useState({})
    const [ receieved, setRecieved ] = useState(false)
    const [ isValid, setIsValid ] = useState(false)
    const [ isWaiting, setIsWaiting ] = useState(false)

    useEffect(() => {
        try {
            const url = new URL(link)
            setIsValid(true)
        } catch (_) {
            setIsValid(false)
        }
    }, [link])

    function handleInput(event) {
        setLink(event.target.value, console.log(link));
    }

    function handleSubmit() {
        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({link: link})
        }

        setIsWaiting(true)
        setResult({})
        setRecieved(false)
        fetch('https://gerizalserver.onrender.com/link/test', options)
            .then(response => {
                if (response.status != 200) {
                    setError(true)
                    return
                }

                setError(false);
                return response.json()
            })
            .then(response => {setResult(response); setRecieved(true);setIsWaiting(false)})
            .catch(response => {setError(true); setRecieved(true); console.log(response)})
    }

    return (
        <div id="Link Checking" className="link-test container">
            <p className="topic-title">TEST YOUR LINK</p>
            <input className="link-input" type="text" onChange={handleInput} value={link} />
            <button className="link-submit-btn" disabled={!isValid} onClick={handleSubmit}>CHECK</button>
            {!isValid ? <p className="url-validity-note">Note: The link must be in the format of <i>https://www.example.com</i> in order to check</p> : <></>}
            {
                receieved ? 
                <LinkResults results={result} /> :
                <p></p>
            }
            {
                error ?
                <p>There was an error with your request, please try again.</p> :
                <p></p>
            }
            {
                isWaiting ?
                <p>Retrieving results. Please wait a moment...</p>:
                <></>
            }
        </div>
    )
}
