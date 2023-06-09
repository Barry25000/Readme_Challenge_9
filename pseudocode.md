Module 9 pseudo

-prompt user for info about their readme
    use inquirer package to prompt user to answer our q's
        store our quiestions in an array
    prompt user ti input title, desc, installation, usage, contribution
        and test instructions then dispaly these under their section
    propt user to choose a license from a list of options
        generate a badge for the license, add it near the top
        badge link from https://shields.io/category/license
    prompt user to enter their github user name and display under question section
    prompt user to enter their email address, display under question section

-take the users answers and save them
    use writeToFile to generate(name of the file README.md, and the data)

-put the users answers into our markdown template
    make the markdown template and plug in the users answers
        include a table of contents that links to the sections
        include link to github and plugin the users username

        template literal to plug in info for the README

-npm install