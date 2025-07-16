//Opening a local file
function OpenEXELocal(input) {
	let file = input.files[0]
	let arg= ""
	if (file.name.endsWith("dcm"))
		arg = "$dicom:get -l"+path+file.name 
    else  arg = "$image:get -f"+path+file.name 
	location.href = `weasis://${arg}`
}

//Opening a file by URL
function OpenEXEUrl() {
	let arg= document.getElementById("argument").value;
	let path= "$dicom:get -r " + arg
	location.href = `weasis://${path}`
}

//Opening a file from Orthanc
function OpenEXEOr() {
	let arg= document.getElementById("argument2").value;
	let path= "$dicom:rs --url 'https://demo.orthanc-server.com/dicom-web' -r 'patientID=" + arg +"'"
	location.href = `weasis://${path}`
}

//Downloading a file from Orthanc and opening it in Weasis
function OpenEXEOrthanc() {
	let arg= document.getElementById("argument3").value;
	location.href = `weasis://${arg}`
}

//Downloading archive from Orthanc and opening in Weasis
function OpenEXEOrthancStudies() {
	let arg= document.getElementById("argument4").value;
	location.href = `weasis://${arg}`
}