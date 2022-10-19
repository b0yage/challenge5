This is my version of Challenge 5

![image](https://user-images.githubusercontent.com/93613651/196590742-b048c09d-8ede-4765-9676-4d84e7731499.png)


This is the global variables i'm setting up before I start the rest of the script.

i'm setting up the beginning hour, how many hours are shown in the scheduler, get the current time, and setting a timetableElement and a currentState to represent the past, present and future.


![image](https://user-images.githubusercontent.com/93613651/196591064-fcb20b08-f224-4855-b8c0-5acd0445ea42.png)

The first part im doing a function to set up todays date and hour with the correct format.

The 2nd part of the script (lines 20-33) is adding one hour to the loop and setting conditions for the currentState variable.
 The first if: current hour = to the real hour it should be considered present, if its less than the real hour it should considered past and else its considered future.
 
 
 ![image](https://user-images.githubusercontent.com/93613651/196592595-ff636669-d97b-4ffb-a1a4-e8b03ff5e4c1.png)

This part of the script is to append the following script into the html for it to have a save function, a real hour constant refresh, and their respective buttons. 

This is all in within the html class = container. 


![image](https://user-images.githubusercontent.com/93613651/196593199-d7648d54-969a-4281-b1f3-f4b16ec52b29.png)


Lines ( 48-54 )
Saving the schedule to the local storage.

2nd part of the SS.
Get the saved info (schedule) from the local storage and give the user that information back if the page is refreshed or if enough time has passed where past data cannot be shown while still showing present/future. 


![image](https://user-images.githubusercontent.com/93613651/196593602-4cff3c81-88e6-42b4-86b0-b811884f1140.png)

First part of the script,
Calling the function

2nd part of the script,
updates the date and time every 1 minute.

3rd part of the script,
updates the entire time table every 10 minutes 







