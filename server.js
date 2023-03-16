const express=require('express');
const path=require('path')
const port=5012;
const app=express();
const database=require('mysql');
const bodyparser=require('body-parser')
const { connect } = require('http2');
app.use(express.static("public"))
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.json())
 const connectdatabase=database.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"Invoice"
 })
connectdatabase.connect((err)=>{
   // var sql="create table invoicedetails(id int AUTO_INCREMENT PRIMARY KEY,clientName varchar(255),clientEmail text,streetAddress varchar(255),city varchar(255),postcode varchar(255),country varchar(255),date DATE,paymentterms varchar(255),projectDescription TEXT,item JSON)"
   // connectdatabase.query(sql,(err)=>{
      if(err){
         console.log(err);
      }
      else{
      console.log("Invoice database connected!")
      }
   })

// })
app.post('/draft', (req, res) => {
   console.log(req.body.draftobject);
   var objectvalues=req.body.draftobject;
   res.json({ message: 'Received draft object' });
   var sql = `insert into invoicedetails (clientid,clientName, clientEmail, streetAddress, city, postcode, country, date, paymentterms, projectDescription, item, status) values (${objectvalues.clientid},'${objectvalues.clientname}', '${objectvalues.clientdetails}', '${objectvalues.clientstreetaddress}', '${objectvalues.clientcity}', '${objectvalues.clientpostcode}', '${objectvalues.clientcountry}', '${objectvalues.clientdate}', '${objectvalues.clientpayment}', '${objectvalues.clientprojectdescription}', '${JSON.stringify(objectvalues.clientitem)}', '${objectvalues.clientstatus}')`;

   connectdatabase.query(sql,(err,result)=>{
      if(err){
         console.log(err)
      }
      else
      {
         console.log(result)
      }
   })

});
 
 app.post('/senddetails', (req, res) => {
   console.log(req.body.sendobject);
   var objectvalues=req.body.sendobject;
   res.json({ message: 'Received draft object' });
   var sql = `insert into invoicedetails (clientid,clientName, clientEmail, streetAddress, city, postcode, country, date, paymentterms, projectDescription, item, status) values (${objectvalues.clientid},'${objectvalues.clientname}', '${objectvalues.clientdetails}', '${objectvalues.clientstreetaddress}', '${objectvalues.clientcity}', '${objectvalues.clientpostcode}', '${objectvalues.clientcountry}', '${objectvalues.clientdate}', '${objectvalues.clientpayment}', '${objectvalues.clientprojectdescription}', '${JSON.stringify(objectvalues.clientitem)}', '${objectvalues.clientstatus}')`;

   connectdatabase.query(sql,(err,result)=>{
      if(err){
         console.log(err)
      }
      else
      {
         console.log(result)
      }
   })
 });
 app.get('/index',(req,res)=>{
   var sql="SELECT * FROM invoicedetails";
   connectdatabase.query(sql,(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(result)
      
      res.render("index",{invoicedetails:result})     
    }
   })
 })
app.get('/form',(req,res)=>{
   res.render("form")
})
app.get('/viewInvoice/:idvalue',(req,res)=>{
   var invoicedetails=`SELECT * FROM invoicedetails WHERE id=${req.params.idvalue}`;
   connectdatabase.query(invoicedetails,(err,result)=>{
      if(err){
         console.log(err);
      }
      else{
         console.log(result);
         res.render("viewInvoice",{details:result})

      }
   })
})
app.post("/editdraft",(req,res)=>{
   console.log(req.body.editdraftobject);
   res.json({ message: 'Received draft object' });
   var objectvalues=req.body.editdraftobject;
   var sql = `UPDATE invoicedetails SET clientName = '${objectvalues.clientname}', clientEmail = '${objectvalues.clientdetails}',streetAddress = '${objectvalues.clientstreetaddress}',city = '${objectvalues.clientcity}',postcode = '${objectvalues.clientpostcode}',country = '${objectvalues.clientcountry}',date = '${objectvalues.clientdate}',paymentterms = '${objectvalues.clientpayment}',projectDescription = '${objectvalues.clientprojectdescription}',item = '${JSON.stringify(objectvalues.clientitem)}',status = '${objectvalues.clientstatus}' WHERE id = ${objectvalues.id}`;

connectdatabase.query(sql,(err,result)=>{
   if(err){
      console.log(err)
   }
   else{
      console.log(result);

   }
})
})
app.post("/editsend",(req,res)=>{
   console.log(req.body.editdraftobject);
   res.json({ message: 'Received draft object' });
   var objectvalues=req.body.editdraftobject;
   var sql = `UPDATE invoicedetails SET clientName = '${objectvalues.clientname}', clientEmail = '${objectvalues.clientdetails}',streetAddress = '${objectvalues.clientstreetaddress}',city = '${objectvalues.clientcity}',postcode = '${objectvalues.clientpostcode}',country = '${objectvalues.clientcountry}',date = '${objectvalues.clientdate}',paymentterms = '${objectvalues.clientpayment}',projectDescription = '${objectvalues.clientprojectdescription}',item = '${JSON.stringify(objectvalues.clientitem)}',status = '${objectvalues.clientstatus}' WHERE id = ${objectvalues.id}`;

connectdatabase.query(sql,(err,result)=>{
   if(err){
      console.log(err)
   }
   else{
      console.log(result);

   }
})
})
app.post('/deleteinvoice/:id',(req,res)=>{
   res.json({ message: 'Received delete id' });

   var sql=`DELETE FROM invoicedetails WHERE id=${Number(req.params.id)}`;
   connectdatabase.query(sql,(err,result)=>{
      if(err){
         console.log(err)
      }
      else{
         console.log(result)
      }
   })
})
app.post('/paidinvoice/:id',(req,res)=>{
   res.json({ message: 'Received paid id' });

  var sql=`UPDATE invoicedetails SET status='Paid' WHERE id = ${Number(req.params.id)}`;

   connectdatabase.query(sql,(err,result)=>{
      if(err){
         console.log(err)
      }
      else{
         console.log(result)
      }
   })
})
app.listen(port,()=>console.log(port+" Listening"))