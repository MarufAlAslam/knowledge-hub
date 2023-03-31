import React from 'react'

const QnA = () => {
    const qna = [
        {
            id: 1,
            question: 'Difference between props and state',
            answer: 'props are used to pass data from parent to child component. state is used to store data in a component'
        },
        {
            id: 2,
            question: 'How does useState work',
            answer: 'useState is a hook that is used to store data in a component. It returns an array with two elements. The first element is the data and the second element is a function that is used to update the data'
        },
        {
            id: 3,
            question: 'What other tasks can useEffect do other than data loading',
            answer: 'useEffect can be used to perform side effects like data loading, setting up a subscription, and manually changing the DOM in React components'
        },
        {
            id: 4,
            question: 'How does react work',
            answer: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.'
        },
    ]
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Questions and Answers</h1>
            <div className="qna-container mt-10">
                {
                    qna.map(q => (
                        <div key={q.id} className="qna mb-4">
                            <h1 className='text-xl font-bold'>{q.id}. {q.question}</h1>
                            <p className='text-md'>{q.answer}</p>
                        </div>
                    ))

                }
                </div>
        </div>
    )
}

export default QnA