import styled from "styled-components"
import { useState } from "react"
import triviaQuestionList from "../triviaQuestionList"

const Discount = ({applyDiscount}) => {

    const getRandomInteger = () => {
        const randomDecimal = Math.random()

        const randomInteger = Math.floor(randomDecimal * 10)

        return(randomInteger)
    }

    const randomIndex = getRandomInteger()

    const [userAnswer, setUserAnswer] = useState("")
    const [discountApplied, setDiscountApplied] = useState(false) 
    

    //ideally, what i'd like is to have a list of trivia question objects imported and a function which randomly selects one for each new user/page refresh
    

    const [triviaQuestion, setTriviaQuestion] = useState(triviaQuestionList[randomIndex])



    const handleAnswerChange = (event) => {
        setUserAnswer(event.target.value)
    } 


    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (userAnswer.toLowerCase() === triviaQuestion.correctAnswer.toLowerCase() && !discountApplied) {
            applyDiscount()
            setDiscountApplied(true)
            const nextQuestion = triviaQuestionList[randomIndex]
            setTriviaQuestion(nextQuestion)
            
            
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