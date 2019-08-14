import { ValidatorComponent } from 'react-form-validator-core';

class TextValidator extends ValidatorComponent {
  render() {
    const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
    return (
      <>
        <input 
          className="form-input" 
          {...rest}
          ref={(r) => { this.input = r; }}/>
        {this.errorText()}
      </>
    )
  }

  errorText() {
    const { isValid } = this.state;
    if (isValid) {
        return null;
    }

    return (
        <div style={{ color: 'red' }}>
            {this.getErrorMessage()}
        </div>
    );
  }
}

export default TextValidator;