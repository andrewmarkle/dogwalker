import React from "react"
import moment from 'moment'
import 'moment-timezone'
import DateTimeField from "react-bootstrap-datetimepicker"
import { RAILS_FORMAT, DATEPICKER_FORMAT } from '../../constants/date_formats'

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initialState();
  }

  initialState() {
    let {dat, model, field} = this.props;

    return {
      format: this.formatInZone(),
      date: this.dateInZone(),
      inputProps: {
        id: model + '_' + field,
        name: model + '[' + field + ']'
      },
      defaultText: this.defaultText()
    }
  }

  formatInZone() {
    let date = this.props.dat;

    return date ? RAILS_FORMAT : DATEPICKER_FORMAT;
  }
  dateInZone() {
    let date = this.props.dat;

    return date ? moment(date).format(this.formatInZone()) : this.todayInTimeZone();
  }

  defaultText() {
    let date = this.props.dat;

    return date ? moment(date).format(DATEPICKER_FORMAT) : '';
  }

  handleChange(newDate) {

    return this.setState({
      date: newDate,
      inputValue: this.dateInCurrentZone(newDate)
    });
  }

  dateInCurrentZone(newDate) {
    let {currentTimeZone} = this.props;

    return moment.unix(newDate/1000).tz(currentTimeZone).format(DATEPICKER_FORMAT);
  }

  todayInTimeZone() {
    let {currentTimeZone} = this.props;

    return moment().tz(currentTimeZone).format(this.formatInZone());
  }

  render() {
    const {date, inputFormat, format, inputProps, defaultText} = this.state;

    return (
      <div className="form-group">
        <label className="control-label">{this.props.label}</label>
        <DateTimeField
          dateTime={date}
          inputProps={inputProps}
          inputFormat={DATEPICKER_FORMAT}
          format={format}
          defaultText={defaultText}
          onChange={(newDate) => {this.handleChange(newDate)}} />
      </div>
    );
  }
}

export default DatePicker
