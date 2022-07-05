let loadToHtml = function(data){
    const resumeDiv = document.querySelector('.container');

    data.forEach((el)=>{
    
            let headerDiv = document.createElement("div")
            headerDiv.classList.add("header-container")
            resumeDiv.append(headerDiv)
    
            let nameTitleDiv = document.createElement("div")
            nameTitleDiv.classList.add("name-div")
            let nameP = document.createElement("p")
            let titleP = document.createElement("p")
            nameP.innerHTML = `${el.fullname}`
            titleP.innerHTML = `${el.titleOne}`
    
            let headerNewline = document.createElement("br")
    
            nameTitleDiv.append(nameP, titleP)
            headerDiv.append(nameTitleDiv, headerNewline)
    
    
    
            let contactDiv = document.createElement("div")
            contactDiv.classList.add("contact-div")
            let contactP = document.createElement("p")
            contactP.textContent = `${el.address} ${el.remote_} ${el.relocalisation_} | ${el.email} | ${el.phone}`           
            contactDiv.append(contactP) // newly added
            headerDiv.append(contactDiv)
    
            let resumeMediaDiv = document.createElement('div')
            resumeMediaDiv.classList.add("media-container")
            let LinkedINLink = document.createElement("a")
            LinkedINLink.href = `${el.linkedInUrl}`
            LinkedINLink.textContent =`${el.linkedIn} |`
            let gitHubLink = document.createElement("a")
            gitHubLink.href = `${el.gitHubUrl}`
            gitHubLink.textContent = ` ${el.gitHub} |`
            let portfolioLink = document.createElement("a")
            portfolioLink.href = ` ${el.portfolioUrl}`
            portfolioLink.textContent =`${el.portfolio}`
            resumeMediaDiv.append(LinkedINLink, gitHubLink, portfolioLink)
            headerDiv.append(resumeMediaDiv)
    
            let resumeObjectiveDiv = document.createElement("div")
            resumeObjectiveDiv.classList.add("objective-container")
            let resumeObjectiveP = document.createElement("p")
            resumeObjectiveP.innerHTML = `${el.objective_details}`
            resumeObjectiveDiv.append(resumeObjectiveP)
            headerDiv.append(resumeObjectiveDiv)
    
    
            let resumeBodyDiv = document.createElement("div")
            resumeBodyDiv.classList.add("resume-body-container")
            resumeDiv.append(resumeBodyDiv)
    
            // Education section : Begin
            let educationDiv = document.createElement("div")
            educationDiv.classList.add("education-container") // main div
            let educationHeaderDiv = document.createElement("div")
            let educationP = document.createElement("p")
            educationP.classList.add("headerSection")
            educationP.classList.add("text-bold")
            educationP.textContent = 'EDUCATION'
            educationHeaderDiv.append(educationP)
    
            let educationNewLine = document.createElement("br")
    
            let educationFirstRowDiv = document.createElement("div")
            educationFirstRowDiv.classList.add("flex-container")
            let leftFirstRowDiv = document.createElement("div")
            leftFirstRowDiv.classList.add("left-row")
            leftFirstRowDiv.classList.add("flex-container")
            let schoolNameP = document.createElement("p")
            schoolNameP.classList.add("text-bold")
            schoolNameP.textContent = `${el.schoolname1}`
            let schoolDetails = document.createElement("p")
            schoolDetails.textContent = ` | ${el.schoolsubject1}`
            schoolDetails.classList.add("text-margin")
            leftFirstRowDiv.append(schoolNameP, schoolDetails)
    
            let rightFirstRowDiv = document.createElement("div")
            rightFirstRowDiv.classList.add("right-row")
    
            let schoolLocationP = document.createElement("p")
            schoolLocationP.classList.add("text-bold")
            schoolLocationP.textContent = `${el.schoolcity1}, ${el.schoolstate1} ${el.attendancemethod1}`
            rightFirstRowDiv.append(schoolLocationP)
    
    
            let educationSecondRowDiv = document.createElement("div")
            educationSecondRowDiv.classList.add("flex-container")
            let leftSecondRowDiv = document.createElement("div")
            leftSecondRowDiv.classList.add("left-row")
            let certificateTitleDiv = document.createElement("div")
            let courseTitleP = document.createElement("p")
            courseTitleP.textContent = `${el.certificate1}` 
            certificateTitleDiv.append(courseTitleP)
            leftSecondRowDiv.append(certificateTitleDiv)
    
            let rightSecondRowDiv = document.createElement("div")
            rightSecondRowDiv.classList.add("right-row")
    
            let certificateDateDiv = document.createElement("div")
            let schoolYearP = document.createElement("p")
            schoolYearP.textContent = `${el.completionmonth1} ${el.completionyear1}` 
            certificateDateDiv.append(schoolYearP)
            rightSecondRowDiv.append(certificateDateDiv)
    
    
    
            educationFirstRowDiv.append(leftFirstRowDiv, rightFirstRowDiv)
            educationSecondRowDiv.append(leftSecondRowDiv, rightSecondRowDiv)
            // educationDiv.append(educationHeaderDiv, educationFirstRowDiv, educationSecondRowDiv)
            // resumeDiv.append(educationDiv)
    
    
            let educationUl = document.createElement("ul")
            educationUl.classList.add('schoolSkills')
            let educationLi = document.createElement("li")
            educationUl.append(educationLi)
    
            let educationOne = document.createTextNode(`${el.achievement_one1}`)
            let educationTwo = document.createTextNode(`${el.achievement_two1}`)
            let educationThree = document.createTextNode(`${el.achievement_three1}`)
    
            let achievementDivOne = document.createElement("div")
            achievementDivOne.classList.add("flex-container")
            let spanOne = document.createElement("span") 
            spanOne.classList.add("circle")
            achievementDivOne.append(spanOne)
            achievementDivOne.append(educationOne)
            educationUl.append(achievementDivOne)
    
            let achievementDivTwo = document.createElement("div")
            achievementDivTwo.classList.add("flex-container")
            let spanTwo = document.createElement("span") 
            spanTwo.classList.add("circle")
            achievementDivTwo.append(spanTwo)
            achievementDivTwo.append(educationTwo)
            educationUl.append(achievementDivTwo)
    
            let achievementDivThree = document.createElement("div")
            achievementDivThree.classList.add("flex-container")
            let spanThree = document.createElement("span") 
            spanThree.classList.add("circle")
            achievementDivThree.append(spanThree)
            achievementDivThree.append(educationThree)
            educationUl.append(achievementDivThree)
    
    
            educationDiv.append(educationNewLine, educationHeaderDiv, educationFirstRowDiv, educationSecondRowDiv, educationUl)
        
            resumeBodyDiv.append(educationNewLine, educationHeaderDiv, educationFirstRowDiv, educationSecondRowDiv, educationUl)
    
            // Education section : End
    
            // Skills section : Begin
            let skillsDiv = document.createElement("div")
            skillsDiv.classList.add("skills-container")
            let skillsP = document.createElement("p")
            skillsP.classList.add("headerSection", "text-bold", "top-margin")
            skillsP.textContent = 'SKILLS'
    
            let skillsDetailDiv = document.createElement("div")
            let skillsTechDiv = document.createElement("div")
            skillsTechDiv.classList.add("flex-container", "skills-section-container")
    
            let skillsTechP = document.createElement("p")
            skillsTechP.classList.add("text-bold")
            skillsTechP.textContent ="Technical Skills:"
            let skillsTechOneSpan = document.createElement("span")
            skillsTechOneSpan.classList.add('skills-margin')
            skillsTechOneSpan.textContent = `${el.skillTechOne}, ${el.skillTechTwo}, ${el.skillTechThree}, ${el.skillTechFour}, ${el.skillTechFive}, ${el.skillTechSix}, ${el.skillTechSeven}, ${el.skillTechEight}, ${el.skillTechNine}, ${el.skillTechTen}  `
            let skillsTechTwoSpan = document.createElement("span")
            skillsTechTwoSpan.textContent =``
            let skillsTechThreeSpan= document.createElement("span")
            skillsTechThreeSpan.textContent =""
            let skillsTechFourSpan = document.createElement("span")
            skillsTechFourSpan.textContent =""
            let skillsTechFiveSpan = document.createElement("span")
            skillsTechFiveSpan.textContent =" "
            let skillsTechSixSpan = document.createElement("span")
            skillsTechSixSpan.textContent =" "
            skillsTechDiv.append(skillsTechP, skillsTechOneSpan, skillsTechTwoSpan, skillsTechThreeSpan, skillsTechFourSpan, skillsTechFiveSpan, skillsTechSixSpan)
    
            let skillsMarketDiv = document.createElement("div")
            skillsMarketDiv.classList.add("flex-container", "skills-section-container")
            let skillsMarketP = document.createElement("p")
            skillsMarketP.classList.add("text-bold")
            skillsMarketP.textContent ="Marketable Skills:"
            let skillsMarketOne = document.createElement("span")
            skillsMarketOne.classList.add('skills-margin')
            skillsMarketOne.textContent = `${el.skillMarketOne}, ${el.skillMarketTwo}, ${el.skillMarketThree}, ${el.skillMarketFour}, ${el.skillMarketFive}, ${el.skillMarketSix}, ${el.skillMarketSeven}, ${el.skillMarketEight}, ${el.skillMarketNine}, ${el.skillMarketTen}  `
            let skillsMarketTwo = document.createElement("span")
            skillsMarketTwo.textContent =""
            let skillsMarketThree = document.createElement("span")
            skillsMarketThree.textContent =""
            let skillsMarketFour = document.createElement("span")
            skillsMarketFour.textContent =""
            let skillsMarketFive = document.createElement("span")
            skillsMarketFive.textContent =""
            let skillsMarketSix = document.createElement("span")
            skillsMarketSix.textContent =""
            skillsMarketDiv.append(skillsMarketP, skillsMarketOne, skillsMarketTwo, skillsMarketThree, skillsMarketFour, skillsMarketFive, skillsMarketSix)
    
            skillsDetailDiv.append(skillsTechDiv, skillsMarketDiv)
            skillsDiv.append(skillsP, skillsDetailDiv)
            resumeDiv.append(skillsDiv)
            // Skills section : End
    
    
            // Projects section : Begin
    
            let projectsDiv = document.createElement("div")
            projectsDiv.classList.add("section-container")
    
            let projectSectionDiv = document.createElement("div")
            // projectSectionDiv.classList.add("")
            let projectSectionP = document.createElement("p")
            projectSectionP.classList.add("headerSection", "text-bold", 'top-margin')
            projectSectionP.textContent = 'TECHNICAL PROJECT HIGHLIGHTS'
            projectSectionDiv.append(projectSectionP)
    
            let projectsDetailDiv = document.createElement("div")
            projectsDetailDiv.classList.add("flex-container")
    
            let projectsLeftDiv = document.createElement("div")
            projectsLeftDiv.classList.add("flex-container", "left-row") // to review class name ====================
    
            let projectRoleP = document.createElement("p")
            projectRoleP.classList.add("text-bold") 
            projectRoleP.textContent = `${el.role1} `
            let projectsTitle = document.createElement("p")
            projectsTitle.textContent = `| ${el.title1} | ${el.language1}`
            projectsTitle.classList.add("text-margin")
            let projectsTools = document.createElement("p")
            projectsTools.textContent = ''
            projectsTools.classList.add("text-margin")
            projectsLeftDiv.append(projectRoleP, projectsTitle, projectsTools)
    
            let projectRightDiv = document.createElement("div")
            projectRightDiv.classList.add("right-row")
            let projectDateP = document.createElement("p")
            projectDateP.textContent =`${el.month_start1} ${el.year_start1} - ${el.month_end1} ${el.year_end1}`
            projectRightDiv.append(projectDateP)
    
            let projectsLocationDiv = document.createElement("div") // refer to location source codes are stored 
            projectsLocationDiv.classList.add("link-comtainer")
            let linkDiv = document.createElement("div")
            let projectLink = document.createElement("a")
            linkDiv.append(projectLink)
            projectLink.href= `${el.url1}`
            projectLink.textContent=''
            projectsLocationDiv.append(linkDiv)
    
            let realizationOneDiv = document.createElement("div")
            realizationOneDiv.classList.add("flex-container")
            let spanRealizationOne = document.createElement("span") 
            spanRealizationOne.classList.add("circle")
            let realizationOneP = document.createElement("p")
            realizationOneP.textContent =  `${el.achievementOne1}` 
            realizationOneDiv.append(spanRealizationOne, realizationOneP)
    
            let realizationTwoDiv = document.createElement("div")
            realizationTwoDiv.classList.add("flex-container")
            let spanRealizationTwo = document.createElement("span") 
            spanRealizationTwo.classList.add("circle")
            let realizationTwoP = document.createElement("p")
            realizationTwoP.textContent = `${el.achievementTwo1}` 
            realizationTwoDiv.append(spanRealizationTwo, realizationTwoP)
    
            let realizationThreeDiv = document.createElement("div")
            realizationThreeDiv.classList.add("flex-container")
            let spanRealizationThree = document.createElement("span") 
            spanRealizationThree.classList.add("circle")
            let realizationThreeP = document.createElement("p")
            realizationThreeP.textContent = `${ el.achievementThree1}`
            realizationThreeDiv.append(spanRealizationThree, realizationThreeP)
    
    
    
    
    
            // ======================================================================
    
            let projectsDetailSecondDiv = document.createElement("div")
            projectsDetailSecondDiv.classList.add("flex-container")
    
            let projectNewLine = document.createElement("br")
    
            let projectsLeftSecondDiv = document.createElement("div")
            projectsLeftSecondDiv.classList.add("flex-container", "left-row") // to review class name ====================
    
            let projectRoleSecondP = document.createElement("p")
            projectRoleSecondP.classList.add("text-bold")
            projectRoleSecondP.textContent = 'Administrator'
            let projectsTitleSecondP = document.createElement("p")
            projectsTitleSecondP.textContent = '| Roll a pair of dice'
            projectsTitleSecondP.classList.add("text-margin")
            let projectsToolsSecondP = document.createElement("p")
            projectsToolsSecondP.textContent = '| HTML, CSS & JavaScript'
            projectsToolsSecondP.classList.add("text-margin")
            projectsLeftSecondDiv.append(projectRoleSecondP, projectsTitleSecondP, projectsToolsSecondP)
    
            let projectRightSecondDiv = document.createElement("div")
            projectRightSecondDiv.classList.add("right-row")
            let projectDateSecondP = document.createElement("p")
            projectDateSecondP.textContent ='May 2022'
            projectRightSecondDiv.append(projectDateSecondP)
    
            let projectsLocationSecondDiv = document.createElement("div") // refer to location source codes are stored 
            projectsLocationSecondDiv.classList.add("link-comtainer")
            let linkSecondDiv = document.createElement("div")
            let projectSecondLink = document.createElement("a")
            linkSecondDiv.append(projectSecondLink)
            projectSecondLink.href='https://github.com/KenzieAcademy-Students/jsdom-assessment-roll-dice-vegatch'
            projectSecondLink.textContent='https://github.com/KenzieAcademy-Students/jsdom-assessment-roll-dice-vegatch'
            projectsLocationSecondDiv.append(linkSecondDiv)
    
            let realizationOneSecondDiv = document.createElement("div")
            realizationOneSecondDiv.classList.add("flex-container")
            let spanRealizationOneSecond = document.createElement("span") 
            spanRealizationOneSecond.classList.add("circle")
            let realizationOneSecondP = document.createElement("p")
            realizationOneSecondP.textContent = 'Creating function to guess the result of a rolling pair of dice and display result to user agent'
            realizationOneSecondDiv.append(spanRealizationOneSecond, realizationOneSecondP)
    
            let realizationTwoSecondDiv = document.createElement("div")
            realizationTwoSecondDiv.classList.add("flex-container")
            let spanRealizationTwoSecond = document.createElement("span") 
            spanRealizationTwoSecond.classList.add("circle")
            let realizationTwoSecondP = document.createElement("p")
            realizationTwoSecondP.textContent = 'Create function to display sum of dice dynamically in graph each time rolled'
            realizationTwoSecondDiv.append(spanRealizationTwoSecond, realizationTwoSecondP)
    
            let realizationThreeSecondDiv = document.createElement("div")
            realizationThreeSecondDiv.classList.add("flex-container")
            let spanRealizationThreeSecond = document.createElement("span") 
            spanRealizationThreeSecond.classList.add("circle")
            let realizationThreeSecondP = document.createElement("p")
            realizationThreeSecondP.textContent = 'Create function to roll pair of dice one thousand times'
            realizationThreeSecondDiv.append(spanRealizationThreeSecond, realizationThreeSecondP)
    
            // ======================================================================
            projectsDetailDiv.append(projectsLeftDiv, projectRightDiv)
            projectsDetailSecondDiv.append(projectsLeftSecondDiv, projectRightSecondDiv)
    
            projectsDiv.append(projectSectionDiv, projectsDetailDiv, projectsLocationDiv, realizationOneDiv, realizationTwoDiv, realizationThreeDiv, projectNewLine, projectsDetailSecondDiv, projectsLocationSecondDiv, realizationOneSecondDiv, realizationTwoSecondDiv, realizationThreeSecondDiv)
            resumeDiv.append(projectsDiv)
    
            // Projects section : End
            
    
            // Work experience : Begin ===============================
    
            let workDiv = document.createElement("div") // main container
            let workHeaderDiv = document.createElement("div")
            let workHeaderP = document.createElement("p")
            workHeaderP.classList.add("headerSection", "text-bold", 'top-margin')
            workHeaderP.textContent = "WORK EXPERIENCE"
            workHeaderDiv.append(workHeaderP)
    
            let workNewLine = document.createElement("br")
    
            let firstRowOneDiv = document.createElement("div")
            firstRowOneDiv.classList.add("flex-container")
            let firstRowOneLeftDiv = document.createElement("div")
            firstRowOneLeftDiv.classList.add("left-row")
            let firstRowOneLeftP =document.createElement("p")
            firstRowOneLeftP.classList.add("text-bold")
            firstRowOneLeftP.textContent = 'Amazon FC'
            firstRowOneLeftDiv.append(firstRowOneLeftP)
    
            let firstRowOneRightDiv = document.createElement("div")
            firstRowOneRightDiv.classList.add("right-row")
            let firstRowOneRightP =document.createElement("p")
            firstRowOneRightP.classList.add("text-bold")
            firstRowOneRightP.textContent = 'Indianapolis, IN'
            firstRowOneRightDiv.append(firstRowOneRightP)
    
            let firstRowTwoDiv = document.createElement("div")
            firstRowTwoDiv.classList.add("flex-container")
            let firstRowTwoLeftDiv = document.createElement("div")
            firstRowTwoLeftDiv.classList.add("left-row")
            let firstRowTwoLeftP =document.createElement("p")
            firstRowTwoLeftP.textContent = 'Picker'
            firstRowTwoDiv.append(firstRowTwoLeftP)
    
            let firstRowTwoRightDiv = document.createElement("div")
            firstRowTwoRightDiv.classList.add("right-row")
            let firstRowTwoRightP =document.createElement("p")
            // firstRowTwoRightP.classList.add("text-bold")
            firstRowTwoRightP.textContent = 'Sep 2020 - to date'
            firstRowTwoRightDiv.append(firstRowTwoRightP)
    
            let workRealizationOneFirstDiv = document.createElement("div")
            workRealizationOneFirstDiv.classList.add("flex-container")
            let spanWorkRealizationOneFirst = document.createElement("span") 
            spanWorkRealizationOneFirst.classList.add("circle")
            let workRealizationOneFirstP = document.createElement("p")
            workRealizationOneFirstP.textContent = 'Performing six (6) sided checks on item to avoid sending incorrect to customer'
            workRealizationOneFirstDiv.append(spanWorkRealizationOneFirst, workRealizationOneFirstP)
    
            let workRealizationTwoFirstDiv = document.createElement("div")
            workRealizationTwoFirstDiv.classList.add("flex-container")
            let spanWorkRealizationTwoFirst = document.createElement("span") 
            spanWorkRealizationTwoFirst.classList.add("circle")
            let workRealizationTwoFirstP = document.createElement("p")
            workRealizationTwoFirstP.textContent = 'Inspect working condition of my Order Picker to avoid possible issues or/and dowmturn'
            workRealizationTwoFirstDiv.append(spanWorkRealizationTwoFirst, workRealizationTwoFirstP)
    
            let workRealizationThreeFirstDiv = document.createElement("div")
            workRealizationThreeFirstDiv.classList.add("flex-container")
            let spanWorkRealizationThreeFirst = document.createElement("span") 
            spanWorkRealizationThreeFirst.classList.add("circle")
            let workRealizationThreeFirstP = document.createElement("p")
            workRealizationThreeFirstP.textContent = 'Always read my scanner to avoid mistakes'
            workRealizationThreeFirstDiv.append(spanWorkRealizationThreeFirst, workRealizationThreeFirstP)
    
    
    
            firstRowOneDiv.append(firstRowOneLeftDiv, firstRowOneRightDiv)
            firstRowTwoDiv.append(firstRowTwoLeftDiv, firstRowTwoRightDiv)
    
    
    
            // second experience
    
            let secondRowOneDiv = document.createElement("div")
            secondRowOneDiv.classList.add("flex-container")
            let secondRowOneLeftDiv = document.createElement("div")
            secondRowOneLeftDiv.classList.add("left-row")
            let secondRowOneLeftP =document.createElement("p")
            secondRowOneLeftP.classList.add("text-bold")
            secondRowOneLeftP.textContent = 'Hubler Ford Franklin'
            secondRowOneLeftDiv.append(secondRowOneLeftP)
    
            let secondRowOneRightDiv = document.createElement("div")
            secondRowOneRightDiv.classList.add("right-row")
            let secondRowOneRightP =document.createElement("p")
            secondRowOneRightP.classList.add("text-bold")
            secondRowOneRightP.textContent = 'Franklin, IN'
            secondRowOneRightDiv.append(secondRowOneRightP)
    
    
    
            let secondRowTwoDiv = document.createElement("div")
            secondRowTwoDiv.classList.add("flex-container")
            let secondRowTwoLeftDiv = document.createElement("div")
            secondRowTwoLeftDiv.classList.add("left-row")
            let secondRowTwoLeftP =document.createElement("p")
            secondRowTwoLeftP.textContent = 'Salesman'
            secondRowTwoLeftDiv.append(secondRowTwoLeftP)
    
            let secondRowTwoRightDiv = document.createElement("div")
            secondRowTwoRightDiv.classList.add("right-row")
            let secondRowTwoRightP =document.createElement("p")
            // secondRowTwoRightP.classList.add("text-bold")
            secondRowTwoRightP.textContent = 'July 2021 - Dec 2021'
            secondRowTwoRightDiv.append(secondRowTwoRightP)
    
    
    
            let workRealizationOneSecondDiv = document.createElement("div")
            workRealizationOneSecondDiv.classList.add("flex-container")
            let spanWorkRealizationOneSecond = document.createElement("span") 
            spanWorkRealizationOneSecond.classList.add("circle")
            let workRealizationOneSecondP = document.createElement("p")
            workRealizationOneSecondP.textContent = 'Listen carefully to customers to better understand their needs and wants'
            workRealizationOneSecondDiv.append(spanWorkRealizationOneSecond, workRealizationOneSecondP)
    
            let workRealizationTwoSecondDiv = document.createElement("div")
            workRealizationTwoSecondDiv.classList.add("flex-container")
            let spanWorkRealizationTwoSecond = document.createElement("span") 
            spanWorkRealizationTwoSecond.classList.add("circle")
            let workRealizationTwoSecondP = document.createElement("p")
            workRealizationTwoSecondP.textContent = 'Work with finance team to get customers approved for car loan'
            workRealizationTwoSecondDiv.append(spanWorkRealizationTwoSecond, workRealizationTwoSecondP)
    
            let workRealizationThreeSecondDiv = document.createElement("div")
            workRealizationThreeSecondDiv.classList.add("flex-container")
            let spanWorkRealizationThreeSecond = document.createElement("span") 
            spanWorkRealizationThreeSecond.classList.add("circle")
            let workRealizationThreeSecondP = document.createElement("p")
            workRealizationThreeSecondP.textContent = 'Contact customers by phone or email to achieve monthly sales goals'
            workRealizationThreeSecondDiv.append(spanWorkRealizationThreeSecond, workRealizationThreeSecondP)
    
    
    
            secondRowOneDiv.append(secondRowOneLeftDiv, secondRowOneRightDiv)
            secondRowTwoDiv.append(secondRowTwoLeftDiv, secondRowTwoRightDiv)
    
            // second experience
    
            workDiv.append(workHeaderDiv, firstRowOneDiv, firstRowTwoDiv, workRealizationOneFirstDiv, workRealizationTwoFirstDiv, workRealizationThreeFirstDiv, workNewLine, secondRowOneDiv, secondRowTwoDiv, workRealizationOneSecondDiv, workRealizationTwoSecondDiv, workRealizationThreeSecondDiv)
            resumeDiv.append(workDiv)
    
            // Work experience : End ===============================
    
    
    
    
    
            // Additional Work experience : Begin =====================
            let workAdditionalDiv = document.createElement("div") // main container
            let workHeaderAdditionalDiv = document.createElement("div")
            let workHeaderAddP = document.createElement("p")
            workHeaderAddP.classList.add("headerSection", "text-bold", 'top-margin')
            workHeaderAddP.textContent = "ADDITIONAL EXPERIENCE"
            workHeaderAdditionalDiv.append(workHeaderAddP)
    
            // let workNewLine = document.createElement("br")
    
            let additionalRowOneDiv = document.createElement("div")
            additionalRowOneDiv.classList.add("flex-container")
            let additionalRowLeftDiv = document.createElement("div")
            additionalRowLeftDiv.classList.add("left-row")
            let additionalRowLeftP =document.createElement("p")
            additionalRowLeftP.classList.add("text-bold")
            additionalRowLeftP.textContent = 'Les Centres Gheskio'
            additionalRowLeftDiv.append(additionalRowLeftP)
    
            let additionalRowRightDiv = document.createElement("div")
            additionalRowRightDiv.classList.add("right-row")
            let additionalRowRightP =document.createElement("p")
            additionalRowRightP.classList.add("text-bold")
            additionalRowRightP.textContent = 'Port-au-Prince, Haiti'
            additionalRowRightDiv.append(additionalRowRightP)
    
            let additionalRowTwoDiv = document.createElement("div")
            additionalRowTwoDiv.classList.add("flex-container")
            let additionalRowTwoLeftDiv = document.createElement("div")
            additionalRowTwoLeftDiv.classList.add("left-row")
            let additionalRowTwoLeftP =document.createElement("p")
            additionalRowTwoLeftP.textContent = 'Database manager'
            additionalRowTwoLeftDiv.append(additionalRowTwoLeftP)
    
            let additionalRowTwoRightDiv = document.createElement("div")
            additionalRowTwoRightDiv.classList.add("right-row")
            let additionalRowTwoRightP =document.createElement("p")
            // firstRowTwoRightP.classList.add("text-bold")
            additionalRowTwoRightP.textContent = 'Mar 2008 - May 2018'
            additionalRowTwoRightDiv.append(additionalRowTwoRightP)
    
            let additionalWorkRealizationOneDiv = document.createElement("div")
            additionalWorkRealizationOneDiv.classList.add("flex-container")
            let spanAdditionalWorkRealizationOne = document.createElement("span") 
            spanAdditionalWorkRealizationOne.classList.add("circle")
            let additionalWorkRealizationOneP = document.createElement("p")
            additionalWorkRealizationOneP.textContent = 'Create MS Access program to store patient\'s data to analyze monthly.'
            additionalWorkRealizationOneDiv.append(spanAdditionalWorkRealizationOne, additionalWorkRealizationOneP)
    
            let additionalWorkRealizationTwoDiv = document.createElement("div")
            additionalWorkRealizationTwoDiv.classList.add("flex-container")
            let spanAdditionalWorkRealizationTwo = document.createElement("span") 
            spanAdditionalWorkRealizationTwo.classList.add("circle")
            let additionalWorkRealizationTwoP = document.createElement("p")
            additionalWorkRealizationTwoP.textContent = 'Use SSRS to make patient\'s data report dynamic and available in point in time.'
            additionalWorkRealizationTwoDiv.append(spanAdditionalWorkRealizationTwo, additionalWorkRealizationTwoP)
                               
    })


  }

        
