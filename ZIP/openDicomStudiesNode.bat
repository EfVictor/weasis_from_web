set file=%1
set file2=%file:~9%
set fileItog=%file2:~0,-1%
cd C:\Users\user1\Downloads\node\DownloadWeasis
curl https://demo.orthanc-server.com/studies/%fileItog%/archive  > %fileItog%.zip REM Download ZIP
curl https://demo.orthanc-server.com/studies/%fileItog%/media  > %fileItog%.zip  REM Download DICOMDIR
cd C:\Program Files\Weasis\ 
Weasis.exe $dicom:get -z http://127.0.0.1:8088/%fileItog%.zip
exit