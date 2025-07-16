# weasis_from_web

Open the dicom-snapshot with Weasis exe from the website on your PC.    
A project for running Weasis and viewing a photo transferred to it. It is implemented in 2 modes:  
* viewing a single photo  
* viewing a group of photos. In this case, Weasis can open a group of photos only if they are on the server, and not locally as in the previous mode. To solve this problem, a simple Node.js server was created.
--------

### Project structure:

1. node - mini-server for storing images in ZIP or DICOMDIR format:
	* node.js - simple Node.js server for storing images
	* launch_node.bat - bat file for starting the server
  
1. ZIP - folder implementing the logic of loading a group of images from orthanc in ZIP or DICOMDIR format:
	*  weasisZIP.reg - registry editor calling the bat file from a web browser
	* delWeasisZIP.reg - deleting the above created branch in the registry
	* openDicomStudiesNode.bat - bat file for loading a group of images to a local Node server
  
1. DCIM - folder implementing the logic of viewing ONE image:
	* weasisDCM.reg - registry editor calling Weasis.exe from a web browser
	* delWeasisDCM.reg - deleting the above created branch in the registry
	* weasis.htm - page for testing the functionality
	* weasis.js - file with the main logic for loading and viewing a single snapshot
	* config.js - file for configuration
