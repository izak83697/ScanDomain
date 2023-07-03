ScanDomains

Description:
ScanDomains is a project that allows you to scan domains that you stored in database using VirusTotal and Whois services. It provides a lot information about domains.

Prerequisites:
Before running the project, make sure you have the following:
Node.js installed on your machine.
Express.js installed on your machine.
MongoDB installed on your machine.
API keys for VirusTotal and Whois services (store them in env file).
Then download the project using the command git clone https://github.com/izak83697/ScanDomains, and install the dependencies using the command npm install.

Usage:
The project consists of two main functionalities:  

Saving a Domain: You can save a domain for scanning by calling post request. It checks if the domain is valid, ensures it doesn't already exist in the system, and saves it for future scanning.

Getting Domain Information: You can retrieve information about a domain by calling get request. It checks if the domain is valid and exists in the system. If the domain has already been scanned, it returns the latest available information. If the domain is being scanned, it indicates the scanning progress. If no information is available, it notifies the user accordingly.

Thank you for reading the page
