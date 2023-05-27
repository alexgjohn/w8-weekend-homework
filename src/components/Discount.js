import styled from "styled-components"

const Discount = ({applyDiscount}) => {

    let discountApplied = false


    const handleFormSubmit = (event) => {
        event.preventDefault()
        applyDiscount()
        discountApplied = true

    }

    const triviaQuestion = {
        question: "Which Simpsons character shot Mr. Burns? (First and last name)",
        correctAnswer: "Maggie Simpson"
    }

    return(
        <>
            { discountApplied ? 
            null
            :
            <>
            <h3>Fancy a wee discount???</h3>
            <p><i>Answer the trivia question below correctly and get 20% off your order!</i></p>
            <p>{triviaQuestion.question}</p>
            <form onSubmit={handleFormSubmit}>
                <label>Answer: </label>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
            </>
            }
            {/* <h3>Fancy a wee discount???</h3>
            <p><i>Answer the trivia question below correctly and get 20% off your order!</i></p>
            <p>{triviaQuestion.question}</p>
            <form onSubmit={handleFormSubmit}>
                <label>Answer: </label>
                <input type="text"></input>
                <input type="submit"></input>
            </form> */}
        </>
    )
}

export default Discount