import React, { Component } from 'react';
import PropTypes from 'prop-types';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jszip';
import 'pdfmake';
import 'datatables.net-bs4';
import 'datatables.net-autofill-bs4';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/buttons.flash.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-colreorder-bs4';
import 'datatables.net-fixedcolumns-bs4';
import 'datatables.net-fixedheader-bs4';
import 'datatables.net-keytable-bs4';
import 'datatables.net-responsive-bs4';
import 'datatables.net-rowgroup-bs4';
import 'datatables.net-rowreorder-bs4';
import 'datatables.net-scroller-bs4';
//import 'datatables.net-searchpanes-bs4';
import 'datatables.net-select-bs4';

export default class ModernDataTables extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount(){
		var elem = "#" + this.props.tableID;
		var settings = this.props.config;
		$(document).ready(function() {
			$(elem).DataTable(settings);
		});
	}

	render() {
		return (
			<div id={this.props.elementID}>
				{this.props.children}
			</div>
		);
	}
}

ModernDataTables.defaultProps = {
	elementID: "datatables-test",
	config: {}
};

ModernDataTables.propTypes = {
	elementID: PropTypes.string,
	tableID: PropTypes.string.isRequired,
	config: PropTypes.object,
	children: PropTypes.element.isRequired
}
