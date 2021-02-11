import React, { useState } from "react";

import moment from "moment";
// npm i @date-io/moment@1.x moment
import OverwriteMomentBE from "./OverwriteMomentBE"; // choose your lib

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

export default function LocalizedDatePicker() {
	const [selectedDate, handleDateChange] = useState(moment().add(0, "years"));

	return (
		<React.Fragment>
			<MuiPickersUtilsProvider utils={OverwriteMomentBE} locale="th">
				<DatePicker format="DD/MM/YYYY" value={selectedDate} onChange={handleDateChange} />
			</MuiPickersUtilsProvider>
			<p>1. output form datepicker :: {selectedDate.format('DD/MM/YYYY')}</p>
      <p>2. output form datepicker (add 543) :: {moment(selectedDate).add(543,'year').format('DD/MM/YYYY')}</p>
		</React.Fragment>
	);
}
