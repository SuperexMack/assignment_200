const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT
const API_KEY = process.env.API_KEY
const cors = require("cors")

app.use(cors({
    origin : "https://assignment-200.vercel.app/",
    methods : ["GET","POST"],
    allowedHeaders: ['Content-Type,Authorization']
}))
app.use(express.json())


let data = `

1.Job Listings - route for this is -> https://api.crustdata.com/data_lab/job_listings/Table/
description of this - Crustdata’s company_id is the unique identifier of a company in our database. It is unique and it never changes. It is numeric.

Use this request to get job listings that were last updated by the company on 1st Feb, 2024 for all companies with company_id equal to any one of [680992, 673947, 631280, 636304, 631811]

and the curl for this is which u have to return is :

curl --request POST \
  --url https://api.crustdata.com/data_lab/job_listings/Table/ \
  --header 'Accept: application/json, text/plain, */*' \
  --header 'Accept-Language: en-US,en;q=0.9' \
  --header 'Authorization: Token $token' \
  --header 'Content-Type: application/json' \
  --header 'Origin: https://crustdata.com' \
  --header 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' \
  --data '{
    "tickers": [],
    "dataset": {
      "name": "job_listings",
      "id": "joblisting"
    },
    "filters": {
      "op": "and",
      "conditions": [
        {"column": "company_id", "type": "in", "value": [7576, 680992, 673947, 631280, 636304, 631811]},
        {"column": "date_updated", "type": ">", "value": "2024-02-01"}
      ]
    },
    "groups": [],
    "aggregations": [],
    "functions": [],
    "offset": 0,
    "limit": 100,
    "sorts": []
  }'


2. Funding Milestones - route for this is - https://api.crustdata.com/data_lab/funding_milestone_timeseries/

description of this is - Use this request to get a time-series of funding milestones with  company_id equal to any one of [637158, 674265, 674657]

curl for this is - 
curl --request POST \
  --url https://api.crustdata.com/data_lab/funding_milestone_timeseries/ \
  --header 'Accept: application/json, text/plain, */*' \
  --header 'Accept-Language: en-US,en;q=0.9' \
  --header 'Authorization: Token $auth_token' \
  --header 'Content-Type: application/json' \
  --header 'Origin: https://crustdata.com' \
  --header 'Referer: https://crustdata.com/' \
  --data '{"filters":{"op": "or", "conditions": [{"column": "company_id", "type": "in", "value": [637158,674265,674657]}]},"offset":0,"count":1000,"sorts":[]}'


3. LinkedIn Employee Headcount and LinkedIn Follower Count - route for this is - https://api.crustdata.com/data_lab/headcount_timeseries/

description for this is - Use this request to get weekly and monthly timeseries of employee headcount as a JSON blob.

You either provide with list a list of Crustdata company_id  or linkedin_id or company_website_domain

In the following example, we request the employee headcount timeseries of companies with  company_id equal to any one of [680992, 673947, 631280, 636304, 631811]

curl for this is  - curl 'https://api.crustdata.com/data_lab/headcount_timeseries/' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Token $auth_token' \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://crustdata.com' \
  -H 'Referer: https://crustdata.com' \
  --data-raw '{
    "filters": {
        "op": "or",
        "conditions": [
                    {
                        "column": "company_id",
                        "type": "=",
                        "value": 634995
                    },
                    {
                        "column": "company_id",
                        "type": "=",
                        "value": 680992
                    },
                    {
                        "column": "company_id",
                        "type": "=",
                        "value": 673947
                    },
                    {
                        "column": "company_id",
                        "type": "=",
                        "value": 631811
                    }
        ]
    },
    "offset": 0,
    "count": 100,
    "sorts": []
}' \
  --compressed

4. Employee Headcount By Function - route for this is  - https://api.crustdata.com/data_lab/linkedin_headcount_by_facet/Table/

description for this is  - Use this request to get the headcount by function for the given company.

You either provide with a list of Crustdata’s company_id  or company_website_domain in the filters

curl for this is - 

curl --request POST \
  --url https://api.crustdata.com/data_lab/linkedin_headcount_by_facet/Table/ \
  --header 'Accept: application/json, text/plain, */*' \
  --header 'Accept-Language: en-US,en;q=0.9' \
  --header 'Authorization: Token $token' \
  --header 'Content-Type: application/json' \
  --header 'Origin: https://crustdata.com' \
  --data '{
    "tickers": [],
    "dataset": {
      "name": "linkedin_headcount_by_facet",
      "id": "linkedinheadcountbyfacet"
    },
    "filters": {
      "op": "and",
      "conditions": [
            {"column": "company_id", "type": "in", "value": [680992, 673947, 631280], "allow_null": false}
      ]
    },
    "groups": [],
    "aggregations": [],
    "functions": [],
    "offset": 0,
    "count": 100,
    "sorts": []
  }'


5. Glassdoor Profile Metrics - route for this is - https://api.crustdata.com/data_lab/glassdoor_profile_metric/Table/

description for this is - Use this request to get the rating of a company on Glassdoor, number of reviews, business outlook, CEO approval rating etc.  

You either provide with a list of Crustdata’s company_id  or company_website_domain in the filters

curl for this is - 


curl --request POST \
  --url https://api.crustdata.com/data_lab/glassdoor_profile_metric/Table/ \
  --header 'Accept: application/json, text/plain, */*' \
  --header 'Accept-Language: en-US,en;q=0.9' \
  --header 'Authorization: Token $token' \
  --header 'Content-Type: application/json' \
  --header 'Origin: https://crustdata.com' \
  --data '{
    "tickers": [],
    "dataset": {
      "name": "glassdoor_profile_metric",
      "id": "glassdoorprofilemetric"
    },
    "filters": {
      "op": "and",
      "conditions": [
        {"column": "company_id", "type": "in", "value": [680992,673947,631280,636304,631811], "allow_null": false}
      ]
    },
    "groups": [],
    "aggregations": [],
    "functions": [],
    "offset": 0,
    "count": 100,
    "sorts": []
  }'


6. G2 Profile Metrics - route for this is - https://api.crustdata.com/data_lab/webtraffic/


description for this is - Use this request to get historical web-traffic of a company by domain

curl for this is -

curl --request POST \
  --url 'https://api.crustdata.com/data_lab/webtraffic/' \
  --header 'Accept: */*' \
  --header 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8' \
  --header 'Authorization: Token $token' \
  --header 'Content-Type: application/json' \
  --data '{
    "filters": {
      "op": "or",
      "conditions": [
        {
          "column": "company_website",
          "type": "(.)",
          "value": "wefitanyfurniture.com"
        }
      ]
    },
    "offset": 0,
    "count": 100,
    "sorts": []
  }'


8. Investor Portfolio - 

description for this is  - Retrieve portfolio details for a specified investor. Each investor, as returned in the [company enrichment endpoint](https://www.notion.so/Crustdata-Discovery-And-Enrichment-API-c66d5236e8ea40df8af114f6d447ab48?pvs=21), has a unique identifier (UUID), name, and type. This API allows you to fetch the full portfolio of companies associated with an investor, using either the investor's uuid or name as an identifier.

**Example 1: query by investor uuid** 

Note: uuid for an investor can be retrieved from /screener/company response. It is available in funding_and_investment.crunchbase_investors_info_list[*].uuid field

so route for this example 1 is : https://api.crustdata.com/data_lab/investor_portfolio?investor_uuid=ce91bad7-b6d8-e56e-0f45-4763c6c5ca29

and curl for this is -

curl 'https://api.crustdata.com/data_lab/investor_portfolio?investor_uuid=ce91bad7-b6d8-e56e-0f45-4763c6c5ca29' \
  --header 'Accept: application/json, text/plain, */*' \
  --header 'Accept-Language: en-US,en;q=0.9' \
  --header 'Authorization: Token $auth_token'

Example 2: query by investor name 

so description for this example is - Note: uuid for an investor can be retrieved from /screener/company response. It is available in funding_and_investment.crunchbase_investors_info_list[*].uuid field 

route for this example 2 is - https://api.crustdata.com/data_lab/investor_portfolio?investor_name=Sequoia Capital

and curl for this is - 

curl 'https://api.crustdata.com/data_lab/investor_portfolio?investor_name=Sequoia Capital' \
  --header 'Accept: application/json, text/plain, */*' \
  --header 'Accept-Language: en-US,en;q=0.9' \
  --header 'Authorization: Token $auth_token'



`


app.get("/" , (req,res)=>{
    res.json({
        msg:"welcome sir !!"
    })
})

app.post("/getdata" , async(req,res)=>{
    const userdaata = req.body.userdaata
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `So i will give u some of the data like some routes with their information 
    like what do this route do i will give u 9 routes with their information so whenever any
    user will ask u something about the route or if user wanna know that is there route
    present for this data then u need to give him the answer so the data with the description
    and route,curland description is  - ${data}

    now please return the data in a json format example

    {
    "description" : "write_description_here",
    "route: "write_route_here"
    curl : "write_curl_here"
    }

    and wait don't give all the data just give that data about which u are asked only
    one desription, route,curl key should be present

    and please do not send anything other than these stuffs and if
    someone will ask any other question answer him - "i can't resond with this data"
    so now don't reply me anthing so the question of the user is : ${userdaata}
    
    `;
    
    const result = await model.generateContent(prompt);
    let promptData = result.response.text();
    let finaldata = promptData.replace(/```json|```/g, "").trim();
    let sendData = JSON.parse(finaldata)
    res.json({
        myresponse : sendData
    })
})


app.listen(PORT , ()=>{
    console.log(`Server is running on the PORT number ${PORT}`)
})