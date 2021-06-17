<p align="center">
The deployment can be found here
</p>
<p align= "center">
    Percolation Problem(DFS): https://hetfadia.github.io/Percolation-Project/
    
</p>
<p align = "center">
    Percolation Problem(DSU): https://hetfadia.github.io/PercolationProjectDSU/
</p>
<br>
<br>
<br>
<p align="center">

  <h3 align="center">Percolation Problem</h3>

  <p align="center">
    A javascript implementation of the Percolation Problem
    <br />
    <a href="https://github.com/HETFADIA/Percolation-Project"></strong></a>
    
  </p>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Aim-of-The-Project">Aim of the Project</a></li>
    <li><a href="#What-is-percolation?">Definition of Percolation</a></li>
    <li><a href="#About-of-The-Project">About the Project</a></li>
    <li><a href="#Monte-Carlo-Simulation">Monte Carlo Simulation</a></li>
    <li><a href="#How-to-Select-and-Unselect-a-cell">How to Select and Unselect a cell</a></li>
    <li><a href="#Details-about-the-page">Details about the page</a></li>
    <li><a href="#Randomly-Select-Button">Simulation</a></li>
    <li><a href="#Data-Structures-Used">Data Structures Used</a></li>
    <li><a href="#Implementation">Implementation</a></li>
    <li><a href="#timecomplexity">Time Complexity</a></li>
    <li><a href="#ScreenShots">ScreenShots</a></li>
    <li><a href="#sources">Sources</a></li>
  </ol>
</details>

<br />
<br />

## Aim of the Project

<p>

The aim of the Project is to determine whether the system percolates or not.
In DSU project, we randomly select cells until the system percolates.
Our aim is to determine the percentage of randomly cells used to percolate the system of n x n grid.

</p>
<br />
<br />

## What is percolation?

<p>
Consider that water is above all the bricks.
Below all the bricks there is dry land.
When the water reaches the below dry land we say the system percolates.
In the beginning there is no way for the water to travel down (as there are bricks in the way)
A user can remove the bricks by clicking on them.
A removed brick is shown using green color (meaning there is space but no water) or a blue brick (meaning water has reached there)

</p>
<br />
<br />

## About the Project

<p>
The Project is made using HTML, CSS, Javascript and BootStrap
The aim of the Project is to know whether the system percolates or not
When the system percolates the button changes to "The system percolates".

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
<br>
<br>
<br>

## Monte Carlo Simulation

<p>

The Randomly Select button also allows to calculate the probability when the system percolates when randomly blocks are selected

</p>
<br />
<br />

## How to Select and Unselect a cell

<p>
This feature only works in percolation problem project
To select cell manually click on it.
To deselect a selected cell click on it again.
Black colour => Cell is currently not selected.
Green colour => Cell is currently selected and water has not reached there.
Blue colour => Cell is currently selected and water has reached there.

</p>
<br />
<br />

## Details about the page

<p>
First you have to enter n : the length of the grid in the DSU project.
Its by default value is 10.
Then to run the project click on simulate.
Active cells are the numbers of cells selected so that the system percolates.
The percentage of the active cells comes out to be 59.3% in a n x n grid.
The percentage of number of cells covered by water and percentage of cells selected(ie no of active cells) is shown in the green box.
The Simulation button randomly selects cells until the system percolates.
The Reset Button clears all the selected cells.

</p>
<br />
<br />
<p id="Randomly-Select-Button"></p>

## Simulation Button

<p>
Click on the simulation Button to simulate the program.
The program will keep on selecting randomly cells until the system percolates.
According to an experiment after selecting approximately 59.3% random cells in n x n grid the system percolates.

</p>
<br />
<br />

## Data Structures Used

<p>

Various Data Structures are used like dictionaries and arrays are used for performing DFS and storing the Details about the cell.
Math.Random is used to generate Random number between 1 and 100.
The Random numbers are used to Randomly select the cells used in Monte Carlo Simulation

Also the Disjoint Set Union is used in percolation problem DSU.
In DSU we can add two edge in log n time thus saving a lot of time.
Thus in DSU we can add edge and check if the system percolates or not in log n time.
While for dfs you have to run DFS again!!!

</p>
<br />
<br />

## Implementation

<p>

Cells 1 to 10 are initially connected to -1 and last 10 cells are connected to -2.
When two adjacent cells are selected We add the edge between them.
The system percolates when -1 cell is connected to -2.

</p>

<p id="timecomplexity"></p>
<br />
<br />

## Time Complexity Analysis

<p>
Using DSU: Using disjoint Set Union two cells get connected to each other in log (n*n) time = 2 log(n).
<p>
So in the Worst case we select all n * n cells. 
</p>
<p>
So the time complexity of the DSU is  n * n log(n)
</p>
Note:
Here n is the width of the grid.

</p>
<br />
<br />

## ScreenShots

Here are the few screenshots of DSU percolation project

<p>
  <img src="https://github.com/HETFADIA/PercolationProjectDSU/blob/main/img/10.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/PercolationProjectDSU/blob/main/img/20.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/PercolationProjectDSU/blob/main/img/100.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/PercolationProjectDSU/blob/main/img/200.png" alt="Logo" width="1080" height="500">
</p>
<p>
  <img src="https://github.com/HETFADIA/PercolationProjectDSU/blob/main/img/300.png" alt="Logo" width="1080" height="500">
</p>

<br />
<br />
<p id ="sources"></p>

## Sources:

<ol>
    <li> https://javascript.info/number
    <li> https://www.geeksforgeeks.org/sets-in-javascript/
<ol>
