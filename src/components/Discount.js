import styled from "styled-components"
import { useState } from "react"

const Discount = ({applyDiscount}) => {

    const [userAnswer, setUserAnswer] = useState("") 
    const [discountApplied, setDiscountApplied] = useState(false)

    const triviaQuestion = {
        question: "Which Simpsons character shot Mr. Burns? (First and last name)",
        correctAnswer: "Maggie Simpson"
    }

    //this currently does nothing at all!


    const handleAnswerChange = (event) => {
        setUserAnswer(event.target.value)
    } 


    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (userAnswer.toLowerCase() === triviaQuestion.correctAnswer.toLowerCase() && !discountApplied) {
            applyDiscount()
            setDiscountApplied(true)
            
        }
        setUserAnswer("")
    }



    return(
        <>
            <h3>Fancy a wee discount???</h3>
            <p><i>Answer the trivia question below correctly and get 20% off your order!</i></p>
            <p>{triviaQuestion.question}</p>
            <form onSubmit={handleFormSubmit}>
                <label>Answer: </label>
                <input 
                    type="text"
                    placeholder="Type your answer here"
                    value={userAnswer}
                    onChange={handleAnswerChange}
                />

                <input 
                    type="submit"
                    value="Give it a shot!"
                />
            </form>
            {discountApplied ? <><h3>Congratulations! You got the discount!</h3> <p>Now stop faffing around and complete your transaction!</p></> : null}
        </>
    )
}

export default Discount