var exec = require('cordova/exec');

exports.coolMethod = function (success, error) {
    exec(success, error, 'ApplemusicPlugin', 'coolMethod');
};

exports.getDeveloperToken = function(success, error) {
    exec(success, error, 'ApplemusicPlugin', 'getDeveloperToken');
}

exports.getUserToken = function(success, error) {
    exec(success, error, 'ApplemusicPlugin', 'getUserToken',);
}