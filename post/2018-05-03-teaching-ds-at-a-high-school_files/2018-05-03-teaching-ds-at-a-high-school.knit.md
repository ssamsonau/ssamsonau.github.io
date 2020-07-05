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



