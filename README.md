# WordFreqCountApp
Project Structure

- WordFreqCountApp(root)
    - api
        - route
            - fileUpload.js
    - client
        - src
            - app.js
			
Follow below steps to run this App:
1) Go to your working directory(WD) in Termina/Command prompt
2) Clone this repo with - git clone https://github.com/shubhendu-repo/WordFreqCountApp.git
3) Go to API directory - cd WordFrequency/api
4) Run - npm install to run necessary dependencies
5) Start the server - npm start
6) Open another terminal or another partition in current terminal and go to WD in step 1
7) Go to Client directory - cd WordFrequency/client
8) repeat step 4 then step 5 to run the server

Assumptions Made:

1) We are only uploading plain/text files - I haven't added check to display message when other format is selected. 
   Behavior is not defined if other formats are uploaded
2) WordFreqCountApp/api/public folder is accessible for any write actions by the api process
3) Output table is not sorted in any order; ordering is based on when a word is encountered first
4) Only 1 file can be uploaded at a time (we don't expect to upload multiple files and display result for them)
