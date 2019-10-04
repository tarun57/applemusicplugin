var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'ApplemusicPlugin', 'coolMethod', [arg0]);
};

exports.getDeveloperToken = function(args0, success, error) {
    exec(success, error, 'ApplemusicPlugin', 'getDeveloperToken', [arg0]);
}

exports.getUserToken = function(args0, success, error) {
    exec(success, error, 'ApplemusicPlugin', 'getUserToken', [arg0]);
}