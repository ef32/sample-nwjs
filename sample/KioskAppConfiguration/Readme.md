## MicaKioskApp

This is configuration for turf to run it as kiosk application using [NW.js](http://nwjs.io/).

## Prerequisites

To run kiosk application:

- NW.js is required. It can be downloaded [here](https://github.com/nwjs/nw.js#downloads).
- turf  should be run using ng serve on port 4200.

## Usage

### for developers with default configuration

 - Run `run-dev.bat` file.

### with parameters

- Run `BuildPackage.ps1` and pass correct parameters
- Go to `package` folder
- Execute `nw .` to start kiosk mode
