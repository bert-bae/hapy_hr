import { ValidatorComponent } from 'react-form-validator-core';

class SelectValidator extends ValidatorComponent {
  render() {
    const { errorMessages, validators, requiredError, validatorListener, options, ...rest } = this.props;
    return (
      <>
        <select
          className="form-input"
          ref={(r) => { this.select = r; }}
          {...rest}>
          { options.map((option, i) => {
            if (i === 0) {
              return (
                <option key={i} defaultValue={option.value}>{option.label}</option>
              )
            }
            return (
              <option key={i} value={option.value}>{option.label}</option>
            )
          })}
        </select>
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

export default SelectValidator;