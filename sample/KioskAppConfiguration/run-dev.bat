PowerShell .\BuildPackage.ps1 -NWJSVersion "0.21.3" -NWJSArchitecture "x64" -BuildConfiguration "Debug" -MicaWebAppUrl "http://localhost:4200/"

cd package
nw .

pause