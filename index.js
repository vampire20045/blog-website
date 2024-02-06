import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 9000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var x = false;
app.use((req, res, next) => {
    const user = req.body["username"];
    const pass = req.body["password"];
  if( user==="Aryan"|| user==="Beauty"|| user==="Smriti"||user ==="Adarsh" || user==="Karan" || user==="Ritika" || user==="Hardik" && pass==="123")
{
    x=true;
}
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
    const user = req.body["username"];
    const pass = req.body["password"];
    if (x) {
        if(user==="Adarsh" || user==="Rtika" ||user==="Alen" || user==="Hardik" || user==="Aryan" || user==="Beauty"|| user==="Karan"||user==="Smriti" ){
            res.render("ll.ejs",{username: user});

        }
         else {
            console.log("Error occurred: Invalid user.");
            res.sendFile(__dirname + "/index.html");
        }

    } else {
        console.log("Error occurred: User not authenticated.");
        res.sendFile(__dirname + "/index.html");
    }
});


app.listen(port, () => {
    console.log("Server is ready ");
});
