const characters =`ABCDEFGHIJKLMNOPQRSTUV WXYZabcdefghijklmnopqrstuvwxyz/-+\|(){}*^%$#@!~><:'.,?:;"[]=0123456789`;

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

// modified function however taken from https://www.programiz.com/javascript/online-compiler/?ref=a82348fd

console.log(generateString(12));

//================HTML form access in JS ==================================
const form = document.querySelector("#personForm")
const formTitle = document.querySelector('#titleForm')
const formContact = document.querySelector('#contactForm')
const formMedia = document.querySelector('#socioForm')
const formObjective = document.querySelector('#resObjective')
const formTech = document.querySelector('#techSkillsForm')
const formMarket = document.querySelector('#marketSkillsForm')
const formProject = document.querySelector('#projectsForm')
const formWork = document.querySelector('#workForm')


//==========================================================================

//================= HTML SUBMIT BUTTON ACCESS IN JS ========================
    btnTitle = document.querySelector('#titleSubmit')

//==========================================================================

const personShortId= shortid.generate();
const titleShortId = shortid.generate();
const contactShortId = shortid.generate();
const linkShortId= shortid.generate();

console.log(personShortId);

const objectiveShortId = shortid.generate();
const educationShortId = shortid.generate();
const techShortId = shortid.generate();


const marketShortId= shortid.generate();
const projectShortId = shortid.generate();
const workShortId = shortid.generate();


// let getDataFromBackEnd = function(){
    
//     let response = fetch('http://localhost:3000/getResumeData')
//     .then(response => response.json())    
//     .then(data => loadToHtml(data['data'])); // new and experimenting
    
// }
// getDataFromBackEnd()


// ============================DEFAULT SHORTID VALUE TO PRIMARY KEY
let personId = document.querySelector('#pId')
personId.defaultValue = personShortId;
personId.readOnly = true;
let titleId = document.querySelector('#title_id')
titleId.defaultValue = shortid.generate();;
titleId.readOnly = true;
let contactId = document.querySelector('#contactId')
contactId.defaultValue = shortid.generate();;
contactId.readOnly = true;

let mediaId = document.querySelector('#media_id')
mediaId.defaultValue = shortid.generate();;
mediaId.readOnly = true;


let objectiveid = document.querySelector('#objective_id')
objectiveid.defaultValue = shortid.generate();;
objectiveid.readOnly = true;

let techId = document.querySelector('#tech_id')
techId.defaultValue = shortid.generate();;
techId.readOnly = true;

let marketId = document.querySelector('#market_id')
marketId.defaultValue = shortid.generate();;
marketId.readOnly = true;

let projectId = document.querySelector('#project_id')
projectId.defaultValue = shortid.generate();;
projectId.readOnly = true;

let workId = document.querySelector('#work_id')
workId.defaultValue = shortid.generate();;
workId.readOnly = true;



// =============== ASSIGNUNG VALUES TO FOREIGN KEYS============
let personIdTitle = document.querySelector('#pIdTitle')
personIdTitle.defaultValue = pId.value;
personIdTitle.readOnly = true;

let personIdContact = document.querySelector('#pIdContact')
personIdContact.defaultValue = pId.value;
personIdContact.readOnly = true;


let personIdSocio = document.querySelector('#pidSocio')
personIdSocio.defaultValue = pId.value;
personIdSocio.readOnly = true;

let personIdObjective = document.querySelector('#pidObjective')
personIdObjective.defaultValue = pId.value;
personIdObjective.readOnly = true;


let personIdTech = document.querySelector('#pidTech')
personIdTech.defaultValue = pId.value;
personIdTech.readOnly = true;

let personIdMarket = document.querySelector('#pidMarket')
personIdMarket.defaultValue = pId.value;
personIdMarket.readOnly = true;


let personIdProject = document.querySelector('#pidProject')
personIdProject.defaultValue = pId.value;
personIdProject.readOnly = true;


let personIdWork = document.querySelector('#pIdWork')
personIdWork.defaultValue = pId.value;
personIdWork.readOnly = true;




// ============================================================






// console.log('from form',resumePersonId)



const fName = document.querySelector("#fname");
const mName = document.querySelector("#middlename");
const lName = document.querySelector("#lastname");
const cUser = document.querySelector("#createUser");
cUser.defaultValue='SBA'

const successMsg = document.querySelector('.message')
successMsg.style.display = "none";

const personForm = document.querySelector("#personForm")


// personForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData(personForm);
//     await postData(personForm)

//     console.log(formData)

    

//   });

// const postData = async (data) => {
//     await fetch("http://localhost:5555/api/resume",{
//         method: "POST",
//         headers: {
//             "Content-Type": "text/plain"
//         },
//         body: data
//     })
// } 


let titleNum = document.querySelector('#titleNum');
let link_number = document.querySelector('#linkId');
let tech_number = document.querySelector('#tech_num');
let marketNum = document.querySelector('#marketNum');
let project_number = document.querySelector('#project_num');
let work_number = document.querySelector('#work_num');

titleNum.readOnly = true;


// titleNum.defaultValue = 0;
// link_number.defaultValue = 1
// tech_number.defaultValue = 1
// market_number.defaultValue = 1
// project_number.defaultValue = 1
// work_number.defaultValue = 1
// ============================== ASSIGN STARTING VALUE 
let titleInput = document.querySelector('#title')
titleInput.addEventListener('input', () =>{       
    if(isNaN(titleNum)){
        titleNum.defaultValue = 0;
        console.log('i love my life')
    }
})

let technicalSkillsInput = document.querySelector('#technicalSkills')
technicalSkillsInput.addEventListener('input', () =>{       
    if(isNaN(tech_num)){
        tech_num.defaultValue = 0;
    }
})

let marketableSkillsInput = document.querySelector('#marketableSkills')
marketableSkillsInput.addEventListener('input', () =>{       
    if(isNaN(marketNum)){
        marketNum.defaultValue = 0;
    }
})


let projectRoleInput = document.querySelector('#projectRole')
projectRoleInput.addEventListener('input', () =>{       
    if(isNaN(project_number)){
        project_number.defaultValue = 0;
    }
})


let companyNameInput = document.querySelector('#companyName')
companyNameInput.addEventListener('input', () =>{       
    if(isNaN(work_number)){
        work_number.defaultValue = 0;
    }
})



// ================================================================================
// let urlnameInput = document.querySelector('#urlname')
// urlnameInput.addEventListener('keydown', () =>{ 
//     if(link_number !== null && link_number.value === ""){
//         link_number.defaultValue = 1
//     }    
// })

let addOne = function (input){
    return input.value ++
}
// ====================== ADD ONE TO VALUE========================
let title_submit = document.querySelector('#titleSubmit')
let link_submit = document.querySelector('#submit_link')
let tech_submit = document.querySelector('#submit_tech')

let market_submit = document.querySelector('#submit_market')
let project_submit = document.querySelector('#submit_project')
let work_submit = document.querySelector('#submit_work')

// let titleNumInput = document.querySelector('#titleNum')


tech_submit.addEventListener('click', () =>{addOne(tech_number)})
market_submit.addEventListener('click', () =>{addOne(marketNum)})
project_submit.addEventListener('click', () =>{addOne(project_number)})
work_submit.addEventListener('click', () =>{addOne(work_number)})


// ============================================================================
// ======================= API ENDPOINT SERVER ====================
const resumeUrl = '/api/resume'
const titleUrl = "/api/title"
const contactUrl = '/api/contact'
const mediaUrl = '/api/media'
const objectiveUrl = '/api/objective'
const techUrl = '/api/tech'
const marketUrl = '/api/market'
const projectUrl = '/api/project'
const workUrl = '/api/work'

// =================================================================









//===============================================================
//=========== PERSON
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(form);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(resumeUrl, {
        method: "POST",
        body: searchParams
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
    // document.querySelector('#titleForm').refresh()
    fName.value=''
    mName.value=''
    lName.value=''

})




//=========== TITLE
formTitle.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formTitle);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(titleUrl, {
        method: "POST",
        body: searchParams
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    // document.querySelector('#titleForm').refresh()
    titleId.defaultValue = generateString(12);
    const titleInput = document.querySelector('#title');
    titleInput.value= '';

})




//========================= CONTACT
formContact.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formContact);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(contactUrl, {
        method: "POST",
        body: searchParams
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
    document.querySelector('#contactId').defaultValue = generateString(12);
    // titleId.defaultValue = generateString(12);
    document.querySelector("#city").value ='';
    document.querySelector("#state").value ='';
    document.querySelector("#zcode").value ='';
    document.querySelector("#remote").value ='';
    document.querySelector("#relocalization").value ='';
    document.querySelector("#email").value ='';
    document.querySelector("#phoneNumber").value ='';

})



//========================= MEDIA
formMedia.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formMedia);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(mediaUrl, {
        method: "POST",
        body: searchParams
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
    document.querySelector('#media_id').defaultValue = generateString(12);
    // titleId.defaultValue = generateString(12);
    document.querySelector("#socioName").value ='N/A';
    document.querySelector("#url").value ='';

})




//========================= OBJECTIVE
formObjective.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formObjective);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(objectiveUrl, {
        method: "POST",
        body: searchParams
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
    // document.querySelector('#objective_id').defaultValue = generateString(12);
    document.querySelector('#objective_id').defaultValue = shortid.generate();
    document.querySelector("#objective").value ='';


})




//========================= TECH SKILLS
formTech.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formTech);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(techUrl, {
        method: "POST",
        body: searchParams
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
    // document.querySelector('#objective_id').defaultValue = generateString(12);
    document.querySelector('#tech_id').defaultValue = shortid.generate();
    document.querySelector("#technicalSkills").value ='';

})




//========================= MARKET SKILSS
formMarket.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formMarket);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(marketUrl, {
        method: "POST",
        body: searchParams
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
    // document.querySelector('#objective_id').defaultValue = generateString(12);
    document.querySelector('#market_id').defaultValue = shortid.generate();
    document.querySelector("#marketableSkills").value ='';

})



//========================= PROJECTS
formProject.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formProject);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(projectUrl, {
        method: "POST",
        body: searchParams
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
    // document.querySelector('#objective_id').defaultValue = generateString(12);
    document.querySelector('#project_id').defaultValue = shortid.generate();
    document.querySelector("#projectRole").value ='';
    document.querySelector("#projectName").value ='';
    document.querySelector("#projectLanguage").value ='';
    document.querySelector("#projectNonthStart").value ='';
    document.querySelector("#projectYearStart").value ='';
    document.querySelector("#projectNonthEnd").value ='';
    document.querySelector("#projectYearEnd").value ='';
    document.querySelector("#projectUrl").value ='';
    document.querySelector("#project_achievementOne").value ='';
    document.querySelector("#project_achievementTwo").value ='';
    document.querySelector("#project_achievementThree").value ='';
    

})



//========================= WORK EXPERIENCE
formWork.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(formWork);

    const searchParams = new URLSearchParams();
    for(const pair of formData){
        searchParams.append(pair[0], pair[1])
    }
    
    fetch(workUrl, {
        method: "POST",
        body: searchParams
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
    // document.querySelector('#objective_id').defaultValue = generateString(12);
    document.querySelector('#work_id').defaultValue = shortid.generate();
    document.querySelector("#companyName").value ='';
    document.querySelector("#companyCity").value ='';
    document.querySelector("#companyState").value ='';
    document.querySelector("#positionInCompany").value ='';
    document.querySelector("#companyStartMonth").value ='';
    document.querySelector("#companyStartYear").value ='';
    document.querySelector("#companyEndMonth").value ='';
    document.querySelector("#companyEndYear").value ='';
    document.querySelector("#realizationInCompanyOne").value ='';
    document.querySelector("#realizationInCompanyTwo").value ='';
    document.querySelector("#realizationInCompanyThree").value ='';    

})



//===============================================================


const countriesAPI = "https://restcountries.com/v3.1/all"

fetch(countriesAPI)
.then(response => response.json())
.then(countriesData => {
    const my = countriesData.find(el =>{ el.CIOC==='CYP'})
    console.log(countriesData)})
.catch(err => console.log(err.message))


const states = './States.json'

fetch(states)
.then(res => res.json())
.then(stateslist => console.log(stateslist))
// const myArray =[]
// let loadHtml = function(myArray){
//     myArray.forEach(country => {
        
//     });
// }


// console.log(myCountry)