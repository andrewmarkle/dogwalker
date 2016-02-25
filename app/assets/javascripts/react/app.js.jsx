import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from './components/datepicker';
import 'moment-timezone';


attachToElementsWithData('.datepicker_initializer', function(data) {
  return(
    <DatePicker
      dat={data.date}
      field={data.field}
      model={data.model}
      label={data.label}
      currentTimeZone={globalData.currentTimeZone} />
  );
});

export default function attachToElementsWithData(selector, providerCallback) {
  if($(selector).length > 0) {
    $(selector).each( function(index, item){
      ReactDOM.render(
        providerCallback($(item).data()),
        $(item)[0]
      )
    })
  }
}

