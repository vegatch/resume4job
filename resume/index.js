
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mysql = require('mysql');
const connection  = require('./config');

// const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 5555



app
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    // .use('/api', routes)
    
    .post('/api/resume', async (req, res)=>{

        // res.json(req.body)
        const body = req.body;

        await connection.query(`
        INSERT INTO
            resumedb.person (
                person_id,
                first_name,
                middle_name,
                last_name,
                create_user
            )
            VALUES
            (
                @personId,
                @firstName,
                @middleName,
                @lastName,
                @createUser
            )

    `, {
            // personId: body.pId,
            // firstName: body.fName,
            // middleName: body.mName,
            // lastName: body.lName,
            // createUser: body.cUser,

            personId: body.pId,
            firstName: body.fName,
            middleName: body.mName,
            lastName: body.lName,
            createUser: body.cUser
        });
        res.json(req.body)
        // res.end('Added user');

        

    })

    .listen(port, () => console.log(`Server listening on port ${port}`));

    