<?php
/*
Plugin Name: Simple Interest Calculator by Calculator.iO
Plugin URI: https://www.calculator.io/simple-interest-calculator/
Description: The simple interest calculator can be used to provide a quick and accurate calculation of interest assessed on a loan or investment.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_simple_interest_calculator
*/

if (!function_exists('add_shortcode')) die("No direct call");

function display_ci_simple_interest_calculator(){
    $page = 'index.html';
    return '<h2><a href="https://www.calculator.io/simple-interest-calculator/" target="_blank"><img src="' . plugins_url('assets/images/icon-48.png', __FILE__ ) . '" width="48" height="48"></a> Simple Interest Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . plugins_url($page, __FILE__ ) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_simple_interest_calculator_iframe"></iframe></div>';
}

add_shortcode( 'ci_simple_interest_calculator', 'display_ci_simple_interest_calculator' );