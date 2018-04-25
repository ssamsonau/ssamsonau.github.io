---
layout: post
date: 2018-04-22 22:56
title:  "Animation overview"
mood: happy
category: 
- data science
---

Let see what is available for antimation

<!--more-->

### General idea

* use saveGIF
* or saveVideo (animation package)
* or use gganimate: [link](https://github.com/dgrtwo/gganimate)

### saveGIF

_General overview with executable examples:_ [link](https://yihui.name/animation/)

_Other Examples here:_

* [link1](https://github.com/tidyverse/ggplot2/wiki/Using-ggplot2-animations-to-demonstrate-several-parallel-numerical-experiments-in-a-single-layout)
* [link2](https://yihui.name/animation/example/savegif/)


Before it will work you need to install one of this:

* ImageMagick ([how to install on MAC](https://encodable.com/install_imagemagick_on_mac_osx/))
* GraphicsMagick ([how ot install GraphicsMagick on Windows](http://www.graphicsmagick.org/INSTALL-windows.html)). In saveGIF function, you have to use option convert = 'gm convert'

{% highlight r %}
library(animation)
library(ggplot2)
  
if(!dir.exists("movies")) dir.create("movies")
  
saveGIF({
    for (i in 1:10) plot(runif(10), ylim = 0:1)
}, convert = 'gm convert', movie.name = "test1.gif")
{% endhighlight %}

{% highlight r %}
if(!dir.exists("movies")) dir.create("movies")
  
saveGIF({
  brownian.motion(pch = 21, cex = 5, col = "red", bg = "yellow")
}, movie.name = "./movies/brownian_motion2.gif", 
  interval = runif(30, 0.01, 1), nmax = 30, convert = 'gm convert')
{% endhighlight %}

_Note:_ N of steps, is controled by nmax in saveGIF does this. Alternativelly, change in globally with
ani.options("nmax" = 50)

##### Example with brownian.motion 

Look at function brownian.motion and create your own by analog
See code iside function

{% highlight r %}
brownian.motion
{% endhighlight %}


Make your own


{% highlight r %}
my_plot <- function(){for(i in 1:10) plot(runif(10), ylim = 0:1)}
  
saveGIF({
  my_plot()
}, movie.name = "./movies/example2.gif", 
   convert = 'gm convert')

library(tidyverse)
mtcars <- mtcars %>% 
  arrange(mpg)
my_plot_2 <- function(){
  for(i in 1:nrow(mtcars)){
      ggplot(mtcars[i, ], aes(x = mpg, y = hp))  +
        geom_point() +
        xlim(range(mtcars[, "mpg"])) +
        ylim(range(mtcars[, "hp"]))
  }
}
  
saveGIF({
  my_plot_2()
}, movie.name = "./movies/example_mtcars.gif", 
   convert = 'gm convert')
{% endhighlight %}


### Animation package

#### Save html

example from [here](https://yihui.name/animation/example/savehtml/)

{% highlight r %}
current_wd <- getwd()
if(!dir.exists("movies")) dir.create("movies")
if(!dir.exists("movies/html")) dir.create("movies/html")
    
setwd("movies/html")

des = c("When you write a long long long long description, R will try to wrap the", 
        "words automatically.", "Oh, really?!")
saveHTML({
  par(mar = c(4, 4, 0.5, 0.5))
  ani.options(interval = 0.5)
  for (i in 1:10) {
    plot(rnorm(50), ylim = c(-3, 3))
    ani.pause()
  }
}, img.name = "norm_plot", single.opts = "utf8: false", autoplay = FALSE, 
interval = 0.5, imgdir = "norm_dir", htmlfile = "random.html", 
ani.height = 400, ani.width = 600, title = "Demo of 50 Normal random numbers", 
description = des)
  
setwd(current_wd)
{% endhighlight %}

