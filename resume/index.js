
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mysql = require('mysql');
const connection  = require('./config');
const { response } = require('express');



const app = express();
const port = process.env.PORT || 5555



app
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(express.json())
    .use(express.urlencoded({ extended: true}))

    .get('/api/allresume',  (req, res) => {     
      let sqlQuery = "SELECT * FROM resumedb.complete_resume";
  
      connection.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send((results));
      });
    })

    .post('/api/resume',  (req, res) => {       

        console.log(req.body)

        personId = req.body.pId, 
        firstName = req.body.fName, 
        middleName = req.body.mName, 
        lastName = req.body.lName,
        createUser = req.body.cUser    
        
        var sql = `INSERT INTO resumedb.person( person_id, first_name, middle_name, last_name, create_user) 
        VALUES ("${personId}", "${firstName}", "${middleName}", "${lastName}", "${createUser}")`;
        connection.query(sql, function(err, result) {
          if (err) throw err;
          console.log('record inserted');
          // response.json({
          //   status: 'success',
          //   message:`record ${personId} has been successfully saved`
          // })
        
        });

    })

      .post('/api/title', function(req, res) {       

        const body = req.body;
        console.log(req.body)
        personId = body.pIdTitle, 
        createUser = `sba`
        titleId = body.title_id
        numOfTitle = body.titleNum
        titleString = body.title
       if(req.body.length === 0) throw err;

       try{
          
        var sql = `INSERT INTO resumedb.person_title( person_id, title_id , title_number, title,  create_user) 
        VALUES ("${personId}", "${titleId}", "${numOfTitle}", "${titleString}", "${createUser}")`;
        connection.query(sql, function(err, result) {
          if (err) throw err;
          console.log('record inserted');
        //   req.flash('success', 'Data added successfully!');
        // res.redirect('/');
        });
       }
       catch (err){
          res.send(err)
       }


     })

     .post('/api/contact', function(req, res) {       

      const body = req.body;
      console.log(req.body)

      contactId = body.contactId,
      personId = body.pIdContact, 
      city_ = body.city,
      state_ = body.state,
      zcode_ = body.zcode,
      remote_ = body.remote,
      relocalization_ = body.relocalization,
      email_ = body.email,
      phoneNumber_ = body.phoneNumber
      createUser = `sba`
      
     if(req.body.length === 0) throw err;

      var sql = `INSERT INTO resumedb.person_contact( contact_id, person_id, address_city, address_state, address_zcode, remote, relocalisation, email, phone, create_user) 
      VALUES ("${contactId}", "${personId}", "${city_}", "${state_}", "${zcode_}", "${remote_}", "${relocalization_}", "${email_}", "${phoneNumber_}",  "${createUser}")`;
      connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log('record inserted');
      //   req.flash('success', 'Data added successfully!');
      // res.redirect('/');
      });

   })
  
    
   .post('/api/media', function(req, res) {       

    const body = req.body;
    console.log(req.body)

    mediaId = body.media_id,
    personId = body.pidSocio, 
    socioName_ = body.socioName, 
    url_ = body.url,     
    createUser = `sba`
    
   if(req.body.length === 0) throw err;

    var sql = `INSERT INTO  resumedb.person_media(media_id, person_id, media_name, media_url, create_user) 
    VALUES ("${mediaId}", "${personId}", "${socioName_}", "${url_}",  "${createUser}")`;
    connection.query(sql, function(err, result) {
      if (err) throw err;
      console.log('record inserted');
    //   req.flash('success', 'Data added successfully!');
    // res.redirect('/');
    });

 })


    .post('/api/objective', function(req, res) {       

      const body = req.body;
      console.log(req.body)

      objectiveId = body.objective_id,
      personId = body.pidObjective, 
      objective_ = body.objective,     
      createUser = `sba`
  
      if(req.body.length === 0) throw err;

      var sql = `INSERT INTO  resumedb.person_resume_objective(objective_id, person_id, objective_details,  create_user) 
      VALUES ("${objectiveId}", "${personId}", "${objective_}",  "${createUser}")`;
      connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log('record inserted');
      //   req.flash('success', 'Data added successfully!');
      // res.redirect('/');
      });

    })


    .post('/api/tech', function(req, res) {       

      const body = req.body;
      console.log(req.body)

      techId = body.tech_id,
      personId = body.pidTech, 
      techNum = body.tech_num,   
      techSkills = body.technicalSkills,  
      createUser = `sba`
  
      if(req.body.length === 0) throw err;

      var sql = `INSERT INTO  resumedb.person_skills_tech(tech_skill_id, person_id, tech_skills_number, skill_tech, create_user) 
      VALUES ("${techId}", "${personId}", "${techNum}", "${techSkills}", "${createUser}")`;
      connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log('record inserted');
      //   req.flash('success', 'Data added successfully!');
      // res.redirect('/');
      });

    })


    .post('/api/market', function(req, res) {       

      const body = req.body;
      console.log(req.body)

      marketId = body.market_id,
      personId = body.pidMarket, 
      marketNum = body.marketNum,   
      marketSkills = body.marketableSkills,  
      createUser = `sba`
  
      if(req.body.length === 0) throw err;

      var sql = `INSERT INTO  resumedb.person_skills_market(market_skill_id, person_id, market_skills_number, skill_market, create_user) 
      VALUES ("${marketId}", "${personId}", "${marketNum}", "${marketSkills}", "${createUser}")`;
      connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log('record inserted');
      //   req.flash('success', 'Data added successfully!');
      // res.redirect('/');
      });

    })


    .post('/api/project', async(req, res) =>{       

      try{

        const body = req.body;
      console.log(req.body)

      projectId = body.project_id,
      personId = body.pidProject, 
      projectNum = body.project_num,   
      projectRole_ = body.projectRole,  
      projectName_ = body.projectName,
      projectLanguage_ = body.projectLanguage, 
      projectNonthStart_ = body.projectNonthStart,   
      projectYearStart_ = body.projectYearStart,
      projectNonthEnd_ = body.projectNonthEnd,
      projectYearEnd_ = body.projectYearEnd, 
      projectUrl_ = body.projectUrl,   
      project_achievementOne_ = body.project_achievementOne,
      project_achievementTwo_ = body.project_achievementTwo,   
      project_achievementThree_ = body.project_achievementThree,

      createUser = `sba`
  
      if(req.body.length === 0) throw err;

      var sql = await `INSERT INTO  resumedb.person_project(project_id, person_id, project_number, project_role, project_name, project_language_used, project_month_start, project_year_start, 
      project_month_end, project_year_end, project_url, project_achievement_one, project_achievement_two, project_achievement_three, create_user) 
      VALUES ("${projectId}", "${personId}", "${projectNum}", "${projectRole_}", "${projectName_}", "${projectLanguage_}", "${projectNonthStart_}", "${projectYearStart_}", "${projectNonthEnd_}", "${projectYearEnd_}", "${projectUrl_}",  "${project_achievementOne_}", "${project_achievementTwo_}",
      "${project_achievementThree_}", "${createUser}")`;
       connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log('record inserted');
      //   req.flash('success', 'Data added successfully!');
      // res.redirect('/');
      });


      }catch(err){

        res.send(err)

      }finally{
        connection.end
      }
      
    })



    .post('/api/work', async(req, res) =>{       

      try{

        const body = req.body;
        console.log(req.body)

        workId = body.work_id,
        personId = body.pIdWork, 
        workNum = body.work_num,   
        companyName_ = body.companyName,  
        companyCity_ = body.companyCity,
        companyState_ = body.companyState, 
        positionInCompany_ = body.positionInCompany,   
        companyStartMonth_ = body.companyStartMonth,
        companyStartYear_ = body.companyStartYear,
        stillWorkThere_ = body.stillWorkThere,
        companyEndMonth_ = body.companyEndMonth, 
        companyEndYear_ = body.companyEndYear,   
        realizationInCompanyOne_ = body.realizationInCompanyOne,
        realizationInCompanyTwo_ = body.realizationInCompanyTwo,   
        realizationInCompanyThree_ = body.realizationInCompanyThree,
        createUser = `sba`
  
      if(req.body.length === 0) throw err;

      var sql = await `INSERT INTO resumedb.person_work(work_id, person_id, work_number, company_name, company_city, company_state, job_role, work_start_month,  work_start_year, still_work_there, work_end_month, work_end_year, work_achievement_one, work_achievement_two, work_achievement_three, create_user) 
      VALUES ("${workId}", "${personId}", "${workNum}", "${companyName_}", "${companyCity_}", "${companyState_}", "${positionInCompany_}", "${companyStartMonth_}", "${companyStartYear_}", "${stillWorkThere_}","${companyEndMonth_}", "${companyEndYear_}",  "${realizationInCompanyOne_}", "${realizationInCompanyTwo_}",
      "${realizationInCompanyThree_}", "${createUser}")`;
       connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log('record inserted');
      //   req.flash('success', 'Data added successfully!');
      // res.redirect('/');
      });


      }catch(err){

        res.send(err)

      }finally{
        connection.end
      }
      
    })

    .listen(port, () => console.log(`Server listening on port ${port}`));

    