Pixtrest, a Pinterest clone, is an online pinboard entirely made up of images. User can create their own profile, upload their own pins, save other users pins and create boards to group pins into categories.


##Technology
- Rails
- React/Redux
- Postgres
- Ajax
- jBuilder
- Amazon Web Services

## Languages

- Ruby version 5.2
- JavaScript

## Challenges

One particular challenge was the Re-Pinning feature, which allows a user to re-pin another users pin to one of their boards, or repin their own pin to a different board.

<img src='http://i67.tinypic.com/zkip84.png'>
<img src='http://i63.tinypic.com/10omyy9.png/'>

One of the first challenges with re-pinning, was the feature where the save button only appears when you hover over a certain pin. In order for this to happen I had to create a component state that would change to true or false depending on if the pin is being hovered over. I bind an event listener function to be invoked and change the component state to true when the mouse enters an element and other event listener function to be invoked when the mouse leaves the element which will change the component state to false. Then I used a conditional ternary operator to only show the save button when the state of the component is true. 

The next challenge with re-pinning is when the save button is clicked on a pin then a create pin modal appears. This pin modal shows the pins picture and a list of all the user's boards that they can add the pin to. In order for this list to appear on this modal, I had to create three extra board components. The first was a board container which gave the board component access to the board slice of state and functions it needed to create a pin and the find all the users boards. The next component used the fetchBoards function in order to get access to all the users boards. I mapped through these boards and created the third component which had access to each individual board. The biggest challenge with all of this is I had to have the pin information be sent as props from the create pin component all the way through to the third board component which had access to each individual board. This board is ultimately where the new pin would be created. Each individual board had a save button and if the user clicked that save button it would set that board id as the pins board id and use the createPin function with the pins information sent over as props to create the new pin to that particular board.






