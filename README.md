<p align="center">

  <h3 align="center">Percolation Problem</h3>

  <p align="center">
    A javascript implementation of the Percolation Problem
    <br />
    <a href="https://github.com/HETFADIA/Percolation-Project"></strong></a>
    
  </p>
</p>
<br />
<br />

<p>
Aim of The Project

The aim of the Project is to determine whether the system percolates or not and to find the probability for Monte Carlo Simulation.

</p>
<br />
<br />

<p>
What is percolation?

Consider that water is above all the bricks.
Below all the bricks there is dry land.
When the water reaches the below dry land we say the system percolates.
In the beginning there is no way for the water to travel down (as there are bricks in the way)
A user can remove the bricks by clicking on them.
A removed brick is shown using green color (meaning there is space but no water) or a blue brick (meaning water has reached there)

</p>
<br />
<br />

<p>
About the Project

The Project is made using HTML, CSS, Javascript and BootStrap
The aim of the Project is to know whether the system percolates or not
When the system percolates the button changes to "The system percolates".

</p>
<p align= "center">
    Percolation Problem(DFS) Link: https://hetfadia.github.io/Percolation-Project/
    
</p>
<p align = "center">
    Percolation Problem(DSU) Link: https://hetfadia.github.io/PercolationProjectDSU/
</p>
<br />
<br />
<p align = "center">
The github links can be seen here:
</p>
<p align= "center">
    <a href="https://github.com/HETFADIA/Percolation-Project">Percolation Problem</a>
    
</p>
<p align = "center">
    <a href="https://github.com/HETFADIA/PercolationProjectDSU">Percolation Problem DSU</a>
</p>
<p>
Monte Carlo Simulation

The Randomly Select button also allows to calculate the probability when the system percolates when randomly blocks are selected

</p>
<br />
<br />
<p>
How to Select/Unselect a cell

To select cell manually click on it.
To deselect a selected cell click on it again.
Black colour => Cell is currently not selected.
Green colour => Cell is currently selected and water has not reached there.
Blue colour => Cell is currently selected and water has reached there.

</p>
<br />
<br />
<p>
Details about the page

The percentage of number of cells covered by water and percentage of cells selected is shown below.
The randomly select button randomly selects cells until the system percolates.
The Reset Button Resets the whole page

</p>
<br />
<br />
<p>
Randomly Select Button

The Randomly Select Button keeps on selecting random cells until the system percolates.
According to an experiment after selecting approximately 59.3% random cells in n x n grid the system percolates.

</p>
<br />
<br />
<p>
Data Structures Used

Various Data Structures are used like dictionaries and arrays are used for performing DFS and storing the Details about the cell.
Math.Random is used to generate Random number between 1 and 100.
The Random numbers are used to Randomly select the cells used in Monte Carlo Simulation

</p>
<br />
<br />
<p>
Implementation

Cells 1 to 10 are initially connected to -1 and last 10 cells are connected to -2.
When two adjacent cells are selected We add the edge between them.
The system percolates when -1 cell is connected to -2.

</p>
<br />
<br />
<p>
    Sources:
    <ol>
        <li> https://javascript.info/number
        <li> https://www.geeksforgeeks.org/sets-in-javascript/
    <ol>
</p>
