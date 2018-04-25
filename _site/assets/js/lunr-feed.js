var hostname = "";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Data Science in Science",
      category: ["data science"],
      content: "Here I gathered some examples of use of Data Scince in a traditional science\n\n\n\nMicrofluidics\n\nChip in a lab: Microfluidics for next generation life science research. link\n\nA Contact-Imaging Based Microfluidic Cytometer with Machine-Learning for Single-Frame Super-Resolution Processing. link\n\nChemistry\n\nAtrificial nose\n\nCreating an artificial nose using machine learning. link\n\nArtificial intelligence accelerates discovery of metallic glass. link\n\nMachine learning in Spectrometry\nA Machine Learning Application for Classification of Chemical Spectra. link\n\nA machine learning approach to explore the spectra intensity pattern of peptides using tandem mass spectrometry data. link\n\nBiology\n\nPrediction of Biological Properties of Molecules from Chemical Structure. link\n\nGenetics and Genomics\n\nMachine learning applications in genetics and genomics. link\n\nPhysics\n\nGravity Waves. link\n\nNuclear Energy\n\nMachine Learning in Nuclear Energy Applications. link\n\nHigs boson\n\nUse the ATLAS experiment to identify the Higgs boson. link\n\nAstrophysics\nApplications of machine learning in astronomy. link\n\nMedicine\n\nPredicting non-small cell lung cancer prognosis by fully automated microscopic pathology image features. link\n\nOceanography\n\nThe Nature Conservancy Fisheries Monitoring. link\nAnnual Nominal Fish Catches. link\n\nAdvanced plotting of data in any field of science\nVisualizing Complex Data with Embedded Plots\n. link\n\n",
      tags: [],
      id: 0
    });
    


var store = [{
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