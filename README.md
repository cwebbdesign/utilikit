# Utilikit

A place where I store all the random bits and pieces that ive cobbled together over time. Many of these have been copied and pasted from varying sources. Where I know the source, it is indicated. 

There are a number of utility functions that I find myself reusing. I created utilikit because I didn't want to create a separate node package for each function but I did want to be able to include each utility separately or as a cluster without having to include the entire kit. This works well with [browserify](browserify.org 'browserify') which will only bundle the necessary functions instead of the whole kit.

## Installation

    npm install utilikit

## Usage

    // Just include one function
    var deepLoop = require('utilikit/lib/object/deepLoop');

    // Include all object utilities
    var objectUtils = require('utilikit/lib/object');

    // Include all the things
    var utilikit = require('utilikit');

## Gulp
The core gulp task will format the javascript, validate the syntax, lint and run tests.

    gulp
    
## Misc.

- Referencing the [documentation of the node require.resolve algorithm](http://nodejs.org/api/modules.html#modules_all_together 'node docs: how require works') is helpful for understanding the project structure. 