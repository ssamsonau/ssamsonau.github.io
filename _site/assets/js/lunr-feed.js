var hostname = "http://www.ssamsonau.com";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Animation overview",
      category: ["data science"],
      content: "Let see what is available for antimation\n\n\n\nGeneral idea\n\n\n  use saveGIF\n  or saveVideo (animation package)\n  or use gganimate: link\n\n\nsaveGIF\n\nGeneral overview with executable examples: link\n\nOther Examples here:\n\n\n  link1\n  link2\n\n\nBefore it will work you need to install one of this:\n\n\n  ImageMagick (how to install on MAC)\n  GraphicsMagick (how ot install GraphicsMagick on Windows). In saveGIF function, you have to use option convert = ‘gm convert’\n\n\nlibrary(animation)\nlibrary(ggplot2)\n  \nif(!dir.exists(\"movies\")) dir.create(\"movies\")\n  \nsaveGIF({\n    for (i in 1:10) plot(runif(10), ylim = 0:1)\n}, convert = 'gm convert', movie.name = \"test1.gif\")\n\nif(!dir.exists(\"movies\")) dir.create(\"movies\")\n  \nsaveGIF({\n  brownian.motion(pch = 21, cex = 5, col = \"red\", bg = \"yellow\")\n}, movie.name = \"./movies/brownian_motion2.gif\", \n  interval = runif(30, 0.01, 1), nmax = 30, convert = 'gm convert')\n\nNote: N of steps, is controled by nmax in saveGIF does this. Alternativelly, change in globally with\nani.options(“nmax” = 50)\n\nExample with brownian.motion\n\nLook at function brownian.motion and create your own by analog\nSee code iside function\n\nbrownian.motion\n\nMake your own\n\nmy_plot &lt;- function(){for(i in 1:10) plot(runif(10), ylim = 0:1)}\n  \nsaveGIF({\n  my_plot()\n}, movie.name = \"./movies/example2.gif\", \n   convert = 'gm convert')\n\nlibrary(tidyverse)\nmtcars &lt;- mtcars %&gt;% \n  arrange(mpg)\nmy_plot_2 &lt;- function(){\n  for(i in 1:nrow(mtcars)){\n      ggplot(mtcars[i, ], aes(x = mpg, y = hp))  +\n        geom_point() +\n        xlim(range(mtcars[, \"mpg\"])) +\n        ylim(range(mtcars[, \"hp\"]))\n  }\n}\n  \nsaveGIF({\n  my_plot_2()\n}, movie.name = \"./movies/example_mtcars.gif\", \n   convert = 'gm convert')\n\nAnimation package\n\nSave html\n\nexample from here\n\ncurrent_wd &lt;- getwd()\nif(!dir.exists(\"movies\")) dir.create(\"movies\")\nif(!dir.exists(\"movies/html\")) dir.create(\"movies/html\")\n    \nsetwd(\"movies/html\")\n\ndes = c(\"When you write a long long long long description, R will try to wrap the\", \n        \"words automatically.\", \"Oh, really?!\")\nsaveHTML({\n  par(mar = c(4, 4, 0.5, 0.5))\n  ani.options(interval = 0.5)\n  for (i in 1:10) {\n    plot(rnorm(50), ylim = c(-3, 3))\n    ani.pause()\n  }\n}, img.name = \"norm_plot\", single.opts = \"utf8: false\", autoplay = FALSE, \ninterval = 0.5, imgdir = \"norm_dir\", htmlfile = \"random.html\", \nani.height = 400, ani.width = 600, title = \"Demo of 50 Normal random numbers\", \ndescription = des)\n  \nsetwd(current_wd)\n\n",
      tags: [],
      id: 0
    });
    

    index.add({
      title: "Data Science in Science",
      category: ["data science"],
      content: "Here I gathered some examples of use of Data Scince in a traditional science\n\n\n\nMicrofluidics\n\nChip in a lab: Microfluidics for next generation life science research. link\n\nA Contact-Imaging Based Microfluidic Cytometer with Machine-Learning for Single-Frame Super-Resolution Processing. link\n\nChemistry\n\nAtrificial nose\n\nCreating an artificial nose using machine learning. link\n\nArtificial intelligence accelerates discovery of metallic glass. link\n\nMachine learning in Spectrometry\nA Machine Learning Application for Classification of Chemical Spectra. link\n\nA machine learning approach to explore the spectra intensity pattern of peptides using tandem mass spectrometry data. link\n\nBiology\n\nPrediction of Biological Properties of Molecules from Chemical Structure. link\n\nGenetics and Genomics\n\nMachine learning applications in genetics and genomics. link\n\nPhysics\n\nGravity Waves. link\n\nNuclear Energy\n\nMachine Learning in Nuclear Energy Applications. link\n\nHigs boson\n\nUse the ATLAS experiment to identify the Higgs boson. link\n\nAstrophysics\nApplications of machine learning in astronomy. link\n\nMedicine\n\nPredicting non-small cell lung cancer prognosis by fully automated microscopic pathology image features. link\n\nOceanography\n\nThe Nature Conservancy Fisheries Monitoring. link\nAnnual Nominal Fish Catches. link\n\nAdvanced plotting of data in any field of science\nVisualizing Complex Data with Embedded Plots\n. link\n\n",
      tags: [],
      id: 1
    });
    


var store = [{
    "title": "Animation overview",
    "link": "/data%20science/animaiton.html",
    "image": null,
    "date": "April 22, 2018",
    "category": ["data science"],
    "excerpt": "Let see what is available for antimation General idea use saveGIF or saveVideo (animation package) or use gganimate: link saveGIF..."
},{
    "title": "Data Science in Science",
    "link": "/data%20science/data-science-in-science.html",
    "image": null,
    "date": "April 20, 2018",
    "category": ["data science"],
    "excerpt": "Here I gathered some examples of use of Data Scince in a traditional science Microfluidics Chip in a lab: Microfluidics..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});