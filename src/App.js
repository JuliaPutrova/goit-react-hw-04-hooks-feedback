import Container from './components/Title/Title';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = event => {
    switch (event.target.textContent) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  //метод для подсчета общего количество feedback с помощью метода reduce
  function countTotalFeedback() {
    return good + neutral + bad;
  }

  //метод для поиска % положительный отзывов
  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  const keys = Object.keys({ good, neutral, bad });

  return (
    <Container title="Please leave feedback">
      <FeedbackOptions
        options={keys}
        onLeaveFeedback={handleBtnClick}
      ></FeedbackOptions>
      {countTotalFeedback() ? (
        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  );
}

/////////////////
// import React, { Component } from 'react';
// import Container from './components/Title/Title';
// import Statistics from './components/Statistics/Statistics';
// import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
// import Notification from './components/Notification/Notification';

// export default class App extends Component {
//    state = {
//      good: 0,
//      neutral: 0,
//      bad: 0,
//    };

//   //метод для прослушивания события по кнопкам
//   onLeaveFeedback = e => {
//     const option = e.target.textContent;
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   //метод для подсчета общего количество feedback с помощью метода reduce
//   countTotalFeedback = () => {
//     const total = Object.keys(this.state).reduce(
//       (acc, key) => acc + this.state[key],
//       0,
//     );
//     return total;
//   };

//   //метод для поиска % положительный отзывов
//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     //получаем ключи из state
//     const keys = Object.keys(this.state);
//     //деструктуризация
//     const { good, neutral, bad } = this.state;

//     return (
//       <Container title="Please leave feedback">
//         <FeedbackOptions
//           options={keys}
//           onLeaveFeedback={this.onLeaveFeedback}
//         ></FeedbackOptions>
//         {this.countTotalFeedback() ? (
//           <Statistics
//             title="Statistics"
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="No feedback given" />
//         )}
//       </Container>
//     );
//   }
// }
