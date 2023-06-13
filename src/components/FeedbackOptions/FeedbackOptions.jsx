import propTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={styles.feedback}>
        {options.map(option => {
          return (
            <button
              type="button"
              key={option}
              onClick={() => onLeaveFeedback(option)}
              className={`${styles.feedback_button} ${
                styles[`feedback_button_${option}`]
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
