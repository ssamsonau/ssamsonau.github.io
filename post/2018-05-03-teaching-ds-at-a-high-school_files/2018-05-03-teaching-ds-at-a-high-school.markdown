---
title: Teaching Data Science at a High School
author: ~
date: '2018-05-03'
draft: false
slug: teaching-ds-at-a-high-school
categories: []
tags: [R, Data Science, Teaching]
lastmod: '2018-05-03'
keywords: []
---

For two years I am teaching a Data Science class at a High School. Here I would like to share my experience and observations. 

<!--more-->

I started mentoring high school student research projects in Data Science 3 years ago, and this lead to a full scale 1 year class of Data Science. The class was taught at The Princeton International School of Mathematics and Science ([PRISMS](http://www.prismsus.org/)) - a small private school with exceptional students and research program for students. More about why doing research at high school makes sense and why it beneficial to students you can find [here](https://ieeexplore.ieee.org/abstract/document/8340465/).


## Class organization

### Class format

* Monday (40 minutes) - work on Shiny (1st semester)
* Tue (90 min) - work on material: theory, exercises, practical examples, etc.
* Thu (90 min) - work on a class projects (independent by each student, and 1 joint project)

### Material distribution

#### Semester 1 - Data Exploration and Communication

The first thing I figured is that data exploration education takes time... I am using the whole semester to go over the book ["R for Data Science"](http://r4ds.had.co.nz/), where students learn to load data, explore and modify it using dplyr, plot data using ggplot2. The exercises in the book are just great!

On top of that once a week we spend time to implement some data analysis in R Shiny. This is extremely important for students to be able to make a completed project they can show to others. R Shiny puts abstract data exploration into a context of real world use by other people.

Git. Important. Really important. Students learn to use Git/GitHub independently and in group. We use both internal R studio's Git interface and [SourceTree](https://www.sourcetreeapp.com/) (no bash).

To summarize, we do cover:

* Data exploration and plotting following ["R for Data Science"](http://r4ds.had.co.nz/)
* Careful reading of errors produced by R. Looking for solutions online
* Use of internal R help, packages vignettes and documentation
* Learning new tools/packages independently
* Shiny
* Git and GitHub
* Mentioning on how to use SQL if needed
* Students make an independent and a group project
* getting data by API (twitter)

#### Semester 2 - Machine Learning

In the second semester we move to machine learning and follow the book [Introduction to Statistical Learning](http://www-bcf.usc.edu/~gareth/ISL/). We cover all the topics in the book. In the first chapters exercises are quite useful. However later, we move to use caret for most of the machine learning work.

To summarize, things covered are:

* machine learning following [Introduction to Statistical Learning](http://www-bcf.usc.edu/~gareth/ISL/) book
* [caret package](http://caret.r-forge.r-project.org/) for machine learning
* text mining
* getting data by API (twitter)
* Big data (basic examples and intro only): Spark ([sparklyr](http://spark.rstudio.com/)), H2o.ai with R, deep learning
* students make independent machine learning projects.

### Tests

Every test is a small project students have to do. I usually give some general points students shall address in their data exploration or ML algorithm. 

Tests are a perfect time to introduce new tools as well. As this way students are forced to learn them and at the same time learning to learn new tools on their own.    
For example, students can be asked to work with dates/times and advised to use lubridate package. Or for a machine learning test, students can be given a task with text, accompanied by an initial introduction to a text-mining approaches/packages. 

Tests often take a form of take-home-tests and can last anywhere between 1 and 7 days. The tests are submitted using GitHub. 

## Why R?

Why did I choose to use R for the class (and not Python, Mathematica, MATLAB...)?

The first obvious reason to choose R vs Mathematica/MATLAB is that it is free and open source. It is also easier to work with than let say Mathematica.

R has tons of packages that _are easy to install_, which allow to do almost anything.

Python package dependencies can be hard to manage. It can be OK for yourself, but when you have many students and you have to deal with installation problems which differ among platforms, the choice is clear - R just works on different platforms (most of the time :) )

And, I personally, like R, especially [tidyverse](https://www.tidyverse.org/) universe of packages. R is built around data analysis, and focuses students on that!

## Is there a place for Data Science in a High School? 

The valid question actually... Why bother? Why not to focus student on more traditional classes, or give him/her to take one more AP? 

### 4 Quadrants of Science education

A science education curriculum in a high school (Physics, Chemistry, Biology, ...) is often focuses on theory. However, in real science there are at least 3 main parts: theory, experiment, and computer(numerical) simulations. And in order to present science to students in a right light, all of them should be covered in parallel (if possible). Data analysis traditionally was included into an experiment. However, the modern tools available make this area much wider and much more powerful than before. Now we can even build new type of models - ML models, in addition to theoretical models, and computer simulation models. (I do address computer simulations in another post [here](/post/exp-labs-with-simulations/))

Thus, I strongly believe modern education in science should include the following 4 parts - 4 quadrants of science if you will. Such education will allow students to enrich their experience in any science they do. Students can perform better, reproducible data analysis, can do better clearer plots, will communicate better, and may find many more new ways to get something useful out of the data.

<img src="/images/2018-05-03-teaching-ds-at-a-high-school/4_quadrants.png" width="200px" style="display: block; margin: auto;" />

### Data Science naturally forces open ended thinking

High school students learn new tools fast. It is not an issue at all to teach students "how" to use R and various packages. At the same time Data Science class provides a perfect platform to teach students to address the following:

* how to formulate a question
* which questions are meaningful
* why do you do this or this action with data
* why would you want to have this or this plot
* how do you make a clear message
* generally, "why" and "what" instead of a simple "how" - the question generally found in open ended tasks 

Thus, there is a lot of time spend in a classroom to have discussions of such sort. It is of a paramount importance.  This is one of the reasons making Data Science class such a good fit for a high school - it naturally forces kids to think independently on open ended tasks!

## Outcomes

* It is not a big deal for students to learn to code in R.
* Generally, after the class students get much more confident to address open ended problems. 
* They learn to "figure out things" instead of asking for help (or even worse getting stuck) for every small detail. 
* At the same time, they learn to formulate good question when they actually need help. Students get a practice in making a "complete project", which is presentable to the public and self-explanatory (in an ideal case).
* Invited speakers can help students to see a beauty and potential of this new field. We were fortunate that Dr. Hadley Wickham accepted an invitation to give a remote talk. The talk did inspire students!
* Students learn tools which they can apply (and they actually do) in other disciplines (especially in research projects). Examples include:
    * Cellphone tower data analysis
    * Astrophysics data
    * Electron microscope (SEM) image segmentation
    * Atomic force microscope (AFM) image analysis
    * Analysis of data obtained from a school-launched satellite
    * Visualization of genomic data
    * Analysis of text in a literature class

### Projects examples

#### Group project
  
* _Renewable Energy exploration. Big Data Challenge_:    
[Shiny app](https://gk-233.shinyapps.io/BigData_PRISMS/), [code on GitHub](https://github.com/prismsus/DS_2017-18-big-data-Pr), [Report in PDF](https://github.com/prismsus/DS_2017-18-big-data-Pr/blob/master/bdc-challenge-2018.pdf)

#### Class projects

* Television show "Produce 101" seasons 1 & 2 data analysis:
[Report](http://rpubs.com/gk_233/351143) and [Shiny App](https://gk-233.shinyapps.io/Produce_101_Data_Analysis/)

* _The Quality of National Top Universities in Each State_: 
[Shiny app](https://gk-233.shinyapps.io/Produce_101_Data_Analysis/)

#### Students' research projects

* _Automating Reconstruction of Focused Ion Beam Current Density Distribution_   
poster presented at FIBSEM meeting on March, 2017 (X. Li, S. Samsonau, E. Chang, V. Ray)   
_Poster at professional meeting:_ Click for [poster](http://www.fibsem.net/web_documents/2017Presentations/P08-Ray-PBS-poster.pdf) and an [interactive application](https://cloud.ket-labs.com/shiny/FIB/)   
Code is not published yet - work in progress

* _Application of data science in tourism_   
_1st Place in Behavioral and Social Science at Mercer County Fair_ ([link to results](http://www.mercersec.org/sites/default/files/2018%20Compact%20Awards%20Ceremony%20Report.pdf))    
Code is not published yet - work in progress

* _Correlation between emotional factors and the stock market_   
Click for [report](https://github.com/prismsus/HighFrequency/blob/master/Final_Presentation.Rmd), [poster](https://github.com/prismsus/HighFrequency/blob/master/poster/Final_poster.pdf), [code](https://github.com/prismsus/HighFrequency)
    
* _Detecting fraud in election by statistical method_       
Click for [report](https://github.com/prismsus/election/blob/master/presentation.md) and [code](https://github.com/prismsus/election)


### P.S. When data science shines

It is actually often the case, that most interesting data projects come from applying data science tools/methodology to an area where a student has an extensive knowledge, or at least has a profound interest. High school is a perfect place for students to learn data science tools and apply them, to whatever area they like!


